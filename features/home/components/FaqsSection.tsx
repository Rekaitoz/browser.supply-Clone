import { getFaqs } from "@/lib/api";
import Faqs from "./Faqs";

interface FaqsSectionProps {
  showHeader?: boolean;
  showHeader2?: boolean;
}

export default async function FaqsSection(props: FaqsSectionProps) {
  const faqs = await getFaqs();

  return <Faqs {...props} faqs={faqs} />;
}
