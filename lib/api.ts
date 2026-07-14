import type { Blog } from "@/data/blog";
import type { faqs } from "@/data/faqs";
import type { Live } from "@/data/live";
import type { Review } from "@/data/review";
import type { Template } from "@/data/templates";
import {
  getAllBlogs,
  getAllFaqs,
  getAllLive,
  getAllReviews,
  getAllTemplates,
  getBlogBySlug,
  getTemplateBySlug,
  parseBlog,
  type BlogDTO,
} from "@/lib/data";

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export async function getTemplates(): Promise<Template[]> {
  return getAllTemplates();
}

export async function getTemplate(slug: string): Promise<Template | null> {
  return getTemplateBySlug(slug) ?? null;
}

export async function getBlogs(): Promise<Blog[]> {
  return getAllBlogs();
}

export async function getBlog(slug: string): Promise<Blog | null> {
  return getBlogBySlug(slug) ?? null;
}

export async function getFaqs(): Promise<faqs[]> {
  return getAllFaqs();
}

export async function getLive(): Promise<Live[]> {
  return getAllLive();
}

export async function getReviews(): Promise<Review[]> {
  return getAllReviews();
}

export async function fetchTemplatesFromApi(): Promise<Template[]> {
  return fetchJSON<Template[]>("/api/templates");
}

export async function fetchBlogsFromApi(): Promise<Blog[]> {
  const blogs = await fetchJSON<BlogDTO[]>("/api/blog");
  return blogs.map(parseBlog);
}
