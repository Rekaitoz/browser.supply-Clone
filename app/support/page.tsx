import Support1Background from "@/components/background/Support1Background";
import Footer from "@/components/layout/Footer";
import Contact from "@/features/home/components/Contact";
import Faqs from "@/features/home/components/Faqs";
import Hero from "@/features/home/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Browser Clone",
    description: "Learn more about the Browser Clone project.",
};

export default function SupportPage() {
    return <main className="relative overflow-x-hidden overflow-y-hidden">
        <Support1Background />
        <Hero />
        <Faqs showHeader={false} />
        <Contact />
        <Footer />
    </main>;
}