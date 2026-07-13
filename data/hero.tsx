import { HeroData } from "@/types/hero";

export const heroData: Record<string, HeroData> = {
  "/": {
    badge: {
      text: "FRAMER TEMPLATES",
      icon: true,
    },

    title: (
      <>
        Webs<em>i</em>te te<em>m</em>pla<em>t</em>es d<em>e</em>si<em>g</em>n<em>e</em>d to co<em>n</em>ve<em>r</em>t
      </>
    ),

    description:
      "Launch your online business today using an easy-to-customize Framer website template without writing a single line of code.",

    button: {
      name: "Browse Templates",
      path: "/templates",
    },
  },

  "/templates": {
    badge: {
      text: "FRAMER TEMPLATES",
    },

    title: (
      <>
        Browse p<em>r</em>emi<em>u</em>m
        <br />
        websi<em>t</em>e temp<em>l</em>ates
      </>
    ),

    description:
      "Find the perfect Framer template for your next website.",

    button: {
      name: "View Templates",
      path: "/templates",
    },
  },

  "/blog": {
    title: (
      <>
        Des<em>i</em>gn ins<em>i</em>ghts
        <br />
        & resources
      </>
    ),

    description:
      "Articles about Framer, design, and growing your online business.",
  },

  "/support": {
    title: (
      <>
        We&apos;re h<em>e</em>re
        <br />
        to he<em>l</em>p
      </>
    ),

    description:
      "Find tutorials, documentation and frequently asked questions.",
  },
};