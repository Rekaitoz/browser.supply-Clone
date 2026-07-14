import TemplateDetail1Background from "@/components/background/TemplateDetail1Background";
import Footer from "@/components/layout/FooterTemp";
import DetailBlogContent from "@/features/home/components/DetailBlogContent";
import DetailBlogHeader from "@/features/home/components/DetailBlogHeader";
import DetailBlogImage from "@/features/home/components/DetailBlogImage";
import { getBlog } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlog(slug);

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