import {
  getAllBlogs,
  getAllFaqs,
  getAllLive,
  getAllReviews,
  getAllTemplates,
  getBlogBySlug,
  getTemplateBySlug,
  serializeBlog,
} from "@/lib/data";
import { slugify } from "@/lib/slugify";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(getAllTemplates());
}
