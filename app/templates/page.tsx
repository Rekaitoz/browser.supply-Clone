import type { Metadata } from "next";

import About from "@/features/about/components/about";

export const metadata: Metadata = {
  title: "About | Browser Clone",
  description: "Learn more about the Browser Clone project.",
};

export default function AboutPage() {
  return <About />;
}