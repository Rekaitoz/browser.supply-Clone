// data/templates.ts

export interface Template {
  id: number;

  name: string;

  shortDesc: string;

  badge: "New" | "Popular" | "Best Seller" | null;

  summary: string;

  description: string;

  audience: string;

  price: number;

  pages: number;

  cmsCollections: number;

  tutorials: number;

  image: string;
}

export const templates: Template[] = [
  {
    id: 1,
    name: "Selene",
    shortDesc: "AI SAAS",
    badge: "New",
    summary:
      "An AI analytics website template built for data-driven SaaS companies.",
    description:
      "Selene is a premium Framer template built for AI analytics platforms and data-driven SaaS companies who want to look intelligent, trustworthy, and attract teams ready to make smarter decisions from day one.",
    audience: "AI startups & analytics platforms",
    price: 129,
    pages: 12,
    cmsCollections: 4,
    tutorials: 10,
    image: "/images/templates/template-1.avif",
  },

  {
    id: 2,
    name: "Nova",
    shortDesc: "STARTUP",
    badge: "Popular",

    summary:
      "A modern startup website template crafted for ambitious SaaS businesses.",
    description:
      "Nova provides clean layouts, engaging interactions, and conversion-focused sections to help startups launch faster and scale confidently.",
    audience: "SaaS startups & software companies",
    price: 99,
    pages: 10,
    cmsCollections: 3,
    tutorials: 8,
    image: "/images/templates/template-2.avif",
  },

  {
    id: 3,
    name: "Atlas",
    shortDesc: "AGENCY",
    badge: "Best Seller",

    summary:
      "A premium agency website template built to showcase creative work beautifully.",
    description:
      "Atlas combines sophisticated typography, modern layouts, and powerful CMS features to help agencies present projects and win more clients.",
    audience: "Creative agencies & freelancers",
    price: 149,
    pages: 14,
    cmsCollections: 5,
    tutorials: 12,
    image: "/images/templates/template-3.avif",
  },

  {
    id: 4,
    name: "Pulse",
    shortDesc: "HEALTH",
    badge: null,
    summary:
      "A modern healthcare website template designed for clinics and wellness brands.",
    description:
      "Pulse helps healthcare businesses establish credibility through elegant service pages, appointment sections, testimonials, and informative content.",
    audience: "Health clinics & wellness brands",
    price: 89,
    pages: 9,
    cmsCollections: 2,
    tutorials: 6,
    image: "/images/templates/template-4.avif",
  },

  {
    id: 5,
    name: "Orbit",
    shortDesc: "FINTECH",
    badge: "Popular",

    summary:
      "A trustworthy fintech website template for modern financial products.",
    description:
      "Orbit is designed for fintech companies that need a polished online presence with secure, conversion-focused layouts and CMS-powered content.",
    audience: "Fintech startups & finance platforms",
    price: 119,
    pages: 11,
    cmsCollections: 4,
    tutorials: 9,
    image: "/images/templates/template-5.avif",
  },

  {
    id: 6,
    name: "Vertex",
    shortDesc: "SOFTWARE",
    badge: "New",

    summary:
      "A software product template built for launching and growing digital products.",
    description:
      "Vertex offers flexible landing pages, documentation layouts, CMS support, and polished UI components for modern software companies.",
    audience: "Software companies & product teams",
    price: 139,
    pages: 13,
    cmsCollections: 5,
    tutorials: 11,
    image: "/images/templates/template-6.avif",
  },
];
