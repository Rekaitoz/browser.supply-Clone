import Home1Background from "@/components/background/Home1Background";
import Home2Background from "@/components/background/Home2Background";
import Home3Background from "@/components/background/Home3Background";
import Footer from "@/components/layout/footer";
import Benefits from "@/features/home/components/Benefits";
import Demo from "@/features/home/components/Demo";
import Founder from "@/features/home/components/Founder";
import Framer from "@/features/home/components/Framer";
import Hero from "@/features/home/components/Hero";
import Pricing from "@/features/home/components/Pricing";
import Process from "@/features/home/components/Process";
import Review from "@/features/home/components/Review";
import Stats from "@/features/home/components/Stats";
import Template from "@/features/home/components/Template";
import Testimonial from "@/features/home/components/Testimonial";
import TryQuiz from "@/features/home/components/TryQuiz";

export default function HomePage() {
  return <main className="relative overflow-x-hidden overflow-y-hidden">

    <Home1Background />

    <Home2Background />

    <Home3Background />

    <Hero />

    <Demo />

    <Stats />

    <Template limit={3} />

    <Benefits />

    <Framer />

    <Process />

    <Testimonial />

    <Pricing />

    <TryQuiz />

    <Founder />

    <Review />

    <Footer />
  </main>;
}
