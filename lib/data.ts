import { blogData, type Blog } from "@/data/blog";
import { faqsData, type faqs } from "@/data/faqs";
import { liveData, type Live } from "@/data/live";
import { reviewData, type Review } from "@/data/review";
import { templates, type Template } from "@/data/templates";
import { slugify } from "@/lib/slugify";

export type BlogDTO = Omit<Blog, "publishedAt"> & { publishedAt: string };

function normalizeSlug(value: string) {
  return value.trim().toLowerCase();
}

export function serializeBlog(blog: Blog): BlogDTO {
  return {
    ...blog,
    publishedAt: blog.publishedAt.toISOString(),
  };
}

export function parseBlog(blog: BlogDTO): Blog {
  return {
    ...blog,
    publishedAt: new Date(blog.publishedAt),
  };
}

export function getAllTemplates(): Template[] {
  return templates;
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(
    (item) => normalizeSlug(item.name) === normalizeSlug(slug)
  );
}

export function getAllBlogs(): Blog[] {
  return blogData;
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogData.find((item) => slugify(item.title) === slug);
}

export function getAllFaqs(): faqs[] {
  return faqsData;
}

export function getAllLive(): Live[] {
  return liveData;
}

export function getAllReviews(): Review[] {
  return reviewData;
}
