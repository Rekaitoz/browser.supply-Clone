import Support1Background from "@/components/background/Support1Background";
import Footer from "@/components/layout/FooterTemp";
import Blog from "@/features/home/components/Blog";
import Hero from "@/features/home/components/Hero";

export default function BlogPage() {
    return <main className="relative overflow-x-hidden overflow-y-hidden">
        <Support1Background />
        <Hero />
        <Blog />
        <Footer />
    </main>;
}