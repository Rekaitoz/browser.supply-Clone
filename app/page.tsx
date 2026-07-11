import HeroBackground from "@/components/background/HeroBackground";
import Demo from "@/features/home/components/Demo";
import Hero from "@/features/home/components/Hero";
import Stats from "@/features/home/components/Stats";

export default function HomePage() {
  return <main className="relative overflow-x-hidden">

    <HeroBackground />

    <Hero />

    <Demo />

    <Stats />
  </main>;
}
