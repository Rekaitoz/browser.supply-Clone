# Additional Questions — Answers

This document answers the supplementary questions for the browser-clone project (Next.js 16, App Router, deployed on Vercel).

---

## 1. If you use JSON data, how would you structure it to support future scalability and maintainability?

I would split data by **domain** rather than one large file:

```
data/
  templates.json
  blog.json
  faqs.json
  live.json
  review.json
```

Each file would follow a consistent shape:

- **Stable identifiers** — use `id` and a URL-friendly `slug` instead of deriving slugs from titles at runtime.
- **Typed schema** — define TypeScript interfaces (or JSON Schema) so frontend and API share the same contract.
- **Normalized references** — store related IDs instead of duplicating objects (e.g. `templateId: 1` in live examples, not the full template object).
- **Metadata fields** — include `createdAt`, `updatedAt`, and `published` flags for future CMS or admin use.
- **Content vs. presentation** — keep raw content (HTML/Markdown) separate from UI-only fields (badges, sort order).

In this project, data lives in `data/*.ts` with a shared access layer in `lib/data.ts` and REST endpoints in `app/api/*`. That separation makes it easy to swap the source from local files to a database later without changing components.

Example blog entry:

```json
{
  "id": 1,
  "slug": "squarespace-vs-framer-2026",
  "title": "Squarespace vs Framer: Which Website Builder Is Better in 2026?",
  "shortDesc": "Compare Framer and Squarespace side by side...",
  "category": "Website",
  "publishedAt": "2026-01-12T00:00:00.000Z",
  "published": true,
  "image": "/images/blog/blog-1.avif",
  "content": "<p>...</p>"
}
```

---

## 2. If you decide to create your own API, which technology or framework would you use and why?

For this project, I used **Next.js Route Handlers** (`app/api/*/route.ts`) because:

- **Same codebase** — frontend and API deploy together on Vercel with no extra infrastructure.
- **TypeScript end-to-end** — shared types between data, API, and UI.
- **Built-in caching** — supports `revalidate` and edge/serverless deployment out of the box.
- **Low complexity** — sufficient for read-heavy content sites like this template marketplace.

Architecture used in this repo:

```
data/*.ts  →  lib/data.ts  →  app/api/*  →  lib/api.ts  →  pages/components
```

If the app grows beyond static content (auth, payments, heavy writes), I would move to:

- **Next.js API + PostgreSQL (Prisma/Drizzle)** for a monolith with relational data, or
- **NestJS / Express + PostgreSQL** as a dedicated backend if multiple clients or mobile apps need the same API.

For a content-heavy marketing site, Next.js Route Handlers remain the best balance of speed, cost, and maintainability.

---

## 3. How would you configure a custom domain (for example, www.clientwebsite.com) to point to your deployed project on Vercel?

**On Vercel:**

1. Deploy the project and connect the Git repository.
2. Open **Project → Settings → Domains**.
3. Add `www.clientwebsite.com` (and optionally the apex domain `clientwebsite.com`).
4. Vercel shows the required DNS records.

**On the domain registrar (e.g. Cloudflare, Namecheap, GoDaddy):**

For `www.clientwebsite.com`:

| Type  | Name | Value              |
|-------|------|--------------------|
| CNAME | www  | cname.vercel-dns.com |

For the root/apex domain `clientwebsite.com`:

| Type | Name | Value              |
|------|------|--------------------|
| A    | @    | 76.76.21.21        |

(or use the registrar's ALIAS/ANAME record if supported)

**After DNS propagation:**

- Vercel automatically provisions a free SSL certificate (HTTPS).
- Set the preferred domain (www vs. non-www) in Vercel and enable redirects so both resolve consistently.
- Optionally add `NEXT_PUBLIC_SITE_URL=https://www.clientwebsite.com` in Vercel environment variables for absolute URLs in metadata and API calls.

---

## 4. If your project requires an admin panel to manage the website content, what technologies and approaches would you choose?

I would use a **headless CMS** or a **custom admin** depending on team size and budget.

**Recommended (fastest to ship):**

- **Sanity**, **Contentful**, or **Strapi** as the content backend
- Next.js frontend fetches content via API/webhook revalidation
- Role-based access (editor vs. admin) handled by the CMS

**Custom admin (more control):**

| Layer        | Choice                                      |
|--------------|---------------------------------------------|
| Frontend     | Next.js admin routes (`/admin`)             |
| Auth         | NextAuth.js / Clerk / Auth.js               |
| Database     | PostgreSQL + Prisma or Drizzle ORM          |
| File uploads | Vercel Blob, Cloudinary, or S3              |
| Rich text    | TipTap or Lexical editor                    |

**Approach:**

1. Move content from `data/*.ts` into database tables (templates, blog posts, FAQs, reviews).
2. Keep the public site reading from the same REST layer (`lib/data.ts` → DB queries).
3. Use **Incremental Static Regeneration (ISR)** or **on-demand revalidation** so content updates appear without a full redeploy.
4. Validate all admin input server-side and audit changes (who edited what, when).

For this project specifically, Sanity or a simple Next.js admin with PostgreSQL would fit well because the content types (templates, blog, FAQs) are already clearly defined.

---

## 5. What techniques would you use to ensure the website loads quickly even on slow internet connections?

Techniques I would apply (several are already used in this project):

**Assets & media**

- Serve images in modern formats (**AVIF/WebP**) — this project uses `.avif` assets.
- Use `next/image` for automatic resizing, lazy loading, and responsive `srcset`.
- Compress videos and defer non-critical media loading.

**JavaScript & rendering**

- Prefer **React Server Components** so less JS is sent to the browser.
- Code-split client components (`"use client"`) only where interactivity is needed (forms, FAQ accordion, hero pathname logic).
- Static generation for marketing pages; dynamic rendering only where necessary.

**Network & caching**

- Enable **CDN caching** via Vercel edge network.
- Use `fetch` with `revalidate` (ISR) for API/data that changes infrequently.
- Preconnect to font and asset origins; use `next/font` to avoid layout shift.

**UX on slow connections**

- Show skeleton/loading states (contact form already has a spinner).
- Prioritize above-the-fold content; lazy-load below-the-fold sections.
- Minimize third-party scripts.

**Monitoring**

- Measure with **Lighthouse**, **Web Vitals** (LCP, CLS, INP), and Vercel Analytics to find real bottlenecks.

---

## 6. If you implement a form, how would you securely send the data to the backend server?

The contact form in this project currently simulates submission. For production, I would implement:

**Frontend**

- Submit via `POST` to a server endpoint (`/api/contact`), never directly to a third-party from the client with secrets exposed.
- Validate required fields client-side for UX, but never rely on it for security.
- Disable the submit button while loading to prevent double submissions.

**Backend (Route Handler)**

```ts
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // 1. Validate with Zod
  // 2. Rate-limit by IP
  // 3. Verify honeypot / CAPTCHA (Turnstile or reCAPTCHA)
  // 4. Sanitize input
  // 5. Send email (Resend/SendGrid) or save to DB
  return Response.json({ success: true });
}
```

**Security measures**

| Measure            | Purpose                                      |
|--------------------|----------------------------------------------|
| HTTPS              | Encrypt data in transit (automatic on Vercel) |
| Server-side validation (Zod) | Reject malformed or oversized input |
| Rate limiting      | Prevent spam and abuse                       |
| CSRF protection    | SameSite cookies or anti-CSRF tokens if using sessions |
| Honeypot / CAPTCHA | Block bots                                   |
| No secrets in client | API keys only in server environment variables |
| Input sanitization | Prevent XSS if content is stored/displayed   |

Never store passwords or sensitive tokens in the frontend. Log errors server-side without exposing internal details to the user.

---

## 7. What strategies do you use to optimize images for performance without sacrificing quality?

**Format & compression**

- Use **AVIF** first (best compression), **WebP** as fallback, JPEG/PNG only when needed.
- This project already uses `.avif` for templates, blog, and review images.

**Next.js Image component**

```tsx
<Image
  src="/images/templates/template-1.avif"
  alt="Selene template"
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="object-cover"
/>
```

- `sizes` tells the browser which resolution to download per breakpoint.
- Lazy loading is automatic for off-screen images.
- Next.js serves correctly sized variants from its image optimizer.

**Workflow**

1. Export at **2× max display size**, not higher than needed.
2. Run assets through **Squoosh**, **Sharp**, or **ImageOptim** before commit.
3. Use consistent aspect ratios (`aspect-16/10` in this project) to reduce layout shift.
4. Add meaningful `alt` text for accessibility and SEO.
5. For hero/LCP images, use `priority` on the single above-the-fold image only.

**CDN**

- On Vercel, optimized images are cached at the edge, so repeat visits load almost instantly even on slow connections.

**Quality vs. size rule of thumb**

- Photos: AVIF quality 50–65 is usually visually identical to a large JPEG.
- UI/graphics with sharp edges: slightly higher quality or SVG for icons/logos.

---

## Project reference

| Item              | Location                          |
|-------------------|-----------------------------------|
| Data layer        | `lib/data.ts`                     |
| API client        | `lib/api.ts`                      |
| REST endpoints    | `app/api/*`                       |
| Contact form      | `features/home/components/Contact.tsx` |
| Image usage       | `next/image` across components    |
