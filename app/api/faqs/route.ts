import { getAllFaqs } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(getAllFaqs());
}
