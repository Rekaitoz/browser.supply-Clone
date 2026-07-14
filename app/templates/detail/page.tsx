import TemplateDetail1Background from "@/components/background/TemplateDetail1Background";
import Footer from "@/components/layout/footer";
import DetailTemplateHeader from "@/features/home/components/DetailTemplateHeader";
import Faqs from "@/features/home/components/Faqs";
import Features from "@/features/home/components/Features";
import Included from "@/features/home/components/Included";
import Review from "@/features/home/components/Review";
import TemplateDetail from "@/features/home/components/TemplateDetail";
import TryBundle from "@/features/home/components/TryBundle";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Browser Clone",
  description: "Learn more about the Browser Clone project.",
};

export default function TemplatesPage() {
  return <main className="relative overflow-x-hidden overflow-y-hidden">
    <TemplateDetail1Background />
    <DetailTemplateHeader />
    <TemplateDetail />
    <Features />
    <TryBundle />
    <Included />
    <Review />
    <Faqs />
    <Footer />
  </main>;
}