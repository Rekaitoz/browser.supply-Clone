import HeroBackground from "@/components/background/HeroBackground";
import TemplateBackground from "@/components/background/TemplateBackground";
import Benefits from "@/features/home/components/Benefits";
import Demo from "@/features/home/components/Demo";
import Framer from "@/features/home/components/Framer";
import Hero from "@/features/home/components/Hero";
import Process from "@/features/home/components/Process";
import Stats from "@/features/home/components/Stats";
import Template from "@/features/home/components/Template";
import Testimonial from "@/features/home/components/Testimonial";

export default function HomePage() {
  return <main className="relative overflow-x-hidden overflow-y-hidden">

    <HeroBackground />

    <TemplateBackground />

    <Hero />

    <Demo />

    <Stats />

    <Template />

    <Benefits />

    <Framer />

    <Process />

    <Testimonial />
  </main>;
}
