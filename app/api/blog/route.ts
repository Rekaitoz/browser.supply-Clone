import { getAllBlogs, serializeBlog } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(getAllBlogs().map(serializeBlog));
}
