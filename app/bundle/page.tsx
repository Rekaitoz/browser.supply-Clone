import Bundle1Background from "@/components/background/Bundle1Background";
import Footer from "@/components/layout/FooterTemp";
import FaqsSection from "@/features/home/components/FaqsSection";
import HeroBundle from "@/features/home/components/HeroBundle";
import Included from "@/features/home/components/Included";
import Template from "@/features/home/components/Template";

export default function BundlePage() {
  return <main className="relative overflow-x-hidden overflow-y-hidden">
    <Bundle1Background />
    <HeroBundle />
    <Included />
    <Template showHeader={false} gridColsDesktop={4} hideBadge={true} hidePrice={true} hideFutureTemplate={false} limit={5} />
    <FaqsSection showHeader={false} showHeader2={true} />
    <Footer />
  </main>;
}