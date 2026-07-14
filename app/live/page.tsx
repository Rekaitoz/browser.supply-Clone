import Live1Background from "@/components/background/Live1Background";
import Live2Background from "@/components/background/Live2Background";
import Footer from "@/components/layout/Footer";
import Hero from "@/features/home/components/Hero";
import LiveExample from "@/features/home/components/LiveExample";
import Process from "@/features/home/components/Process";
import Review from "@/features/home/components/Review";
import Testimonial from "@/features/home/components/Testimonial";

export default function LivePage() {
    return <main className="relative overflow-x-hidden overflow-y-hidden">
        <Live1Background />
        <Live2Background />
        <Hero />
        <LiveExample />
        <Process />
        <Testimonial />
        <Review />
        <Footer />
    </main>;
}