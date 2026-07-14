import TemplateDetail1Background from "@/components/background/TemplateDetail1Background";
import Footer from "@/components/layout/Footer";
import { getTemplate } from "@/lib/api";
import DetailTemplateHeader from "@/features/home/components/DetailTemplateHeader";
import FaqsSection from "@/features/home/components/FaqsSection";
import Features from "@/features/home/components/Features";
import Included from "@/features/home/components/Included";
import Review from "@/features/home/components/Review";
import TemplateDetail from "@/features/home/components/TemplateDetail";
import TryBundle from "@/features/home/components/TryBundle";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;

  const template = await getTemplate(slug);

  if (!template) {
    notFound();
  }


  return <main className="relative overflow-x-hidden overflow-y-hidden">
    <TemplateDetail1Background />
    <DetailTemplateHeader slug={template?.name} />
    <TemplateDetail template={template} />
    <Features template={template} />
    <TryBundle />
    <Included />
    <Review />
    <FaqsSection />
    <Footer />
  </main>;
}