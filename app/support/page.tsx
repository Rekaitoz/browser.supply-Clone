import Support1Background from "@/components/background/Support1Background";
import Footer from "@/components/layout/Footer";
import Contact from "@/features/home/components/Contact";
import Faqs from "@/features/home/components/Faqs";
import Hero from "@/features/home/components/Hero";

export default function SupportPage() {
    return <main className="relative overflow-x-hidden overflow-y-hidden">
        <Support1Background />
        <Hero />
        <Faqs showHeader={false} />
        <Contact />
        <Footer />
    </main>;
}