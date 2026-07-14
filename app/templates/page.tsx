import Template1Background from "@/components/background/Template1Background";
import Template2Background from "@/components/background/Template2Background";
import Footer from "@/components/layout/Footer";
import Faqs from "@/features/home/components/Faqs";
import Hero from "@/features/home/components/Hero";
import Pricing from "@/features/home/components/Pricing";
import Stats from "@/features/home/components/Stats";
import Template from "@/features/home/components/Template";
import Testimonial from "@/features/home/components/Testimonial";
import TryQuiz from "@/features/home/components/TryQuiz";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Browser Clone",
  description: "Learn more about the Browser Clone project.",
};

export default function TemplatesPage() {
  return <main className="relative overflow-x-hidden overflow-y-hidden">
    <Template1Background />
    <Template2Background />
    <Hero />
    <Template showHeader={false} />
    <Stats />
    <Pricing />
    <TryQuiz />
    <Testimonial reverse={true} />
    <Faqs />
    <Footer />
  </main>;
}