import { getTemplateBySlug } from "@/lib/data";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(template);
}
