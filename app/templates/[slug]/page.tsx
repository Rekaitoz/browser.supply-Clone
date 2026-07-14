import TemplateDetail1Background from "@/components/background/TemplateDetail1Background";
import Footer from "@/components/layout/Footer";
import { templates } from "@/data/templates";
import DetailTemplateHeader from "@/features/home/components/DetailTemplateHeader";
import Faqs from "@/features/home/components/Faqs";
import Features from "@/features/home/components/Features";
import Included from "@/features/home/components/Included";
import NotFound from "@/features/home/components/NotFound";
import Review from "@/features/home/components/Review";
import TemplateDetail from "@/features/home/components/TemplateDetail";
import TryBundle from "@/features/home/components/TryBundle";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "About | Browser Clone",
  description: "Learn more about the Browser Clone project.",
};
interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;

  const normalize = (value: string) =>
    value.trim().toLowerCase();

  const template = templates.find(
    (item) => normalize(item.name) === normalize(slug)
  );

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
    <Faqs />
    <Footer />
  </main>;
}