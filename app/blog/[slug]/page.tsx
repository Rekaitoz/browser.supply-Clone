import TemplateDetail1Background from "@/components/background/TemplateDetail1Background";
import Footer from "@/components/layout/Footer";
import { blogData } from "@/data/blog";
import DetailBlogContent from "@/features/home/components/DetailBlogContent";
import DetailBlogHeader from "@/features/home/components/DetailBlogHeader";
import DetailBlogImage from "@/features/home/components/DetailBlogImage";
import { slugify } from "@/lib/slugify";

import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogData.find(
    (item) => slugify(item.title) === slug
  );

  if (!blog) {
    notFound();
  }


  return <main className="relative overflow-x-hidden overflow-y-hidden">
    <TemplateDetail1Background />
    <DetailBlogHeader blog={blog} />
    <DetailBlogImage blog={blog} />
    <DetailBlogContent blog={blog} />

    <Footer />
  </main>;
}