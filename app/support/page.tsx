import Support1Background from "@/components/background/Support1Background";
import Footer from "@/components/layout/FooterTemp";
import ContactSection from "@/features/home/components/ContactSection";
import FaqsSection from "@/features/home/components/FaqsSection";
import Hero from "@/features/home/components/Hero";

export default function SupportPage() {
    return <main className="relative overflow-x-hidden overflow-y-hidden">
        <Support1Background />
        <Hero />
        <FaqsSection showHeader={false} />
        <ContactSection />
        <Footer />
    </main>;
}