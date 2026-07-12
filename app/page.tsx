import HeroBackground from "@/components/background/HeroBackground";
import TemplateBackground from "@/components/background/TemplateBackground";
import Benefits from "@/features/home/components/Benefits";
import Demo from "@/features/home/components/Demo";
import Hero from "@/features/home/components/Hero";
import Stats from "@/features/home/components/Stats";
import Template from "@/features/home/components/Template";

export default function HomePage() {
  return <main className="relative overflow-x-hidden overflow-y-hidden">

    <HeroBackground />

    <TemplateBackground />

    <Hero />

    <Demo />

    <Stats />

    <Template />

    <Benefits />
  </main>;
}
