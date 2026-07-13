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
      icon: true,
    },

    title: (
      <>
        Bro<em>w</em>se pre<em>m</em>ium
        <br />
        we<em>b</em>site te<em>m</em>pla<em>t</em>es
      </>
    ),

    description:
      "View our collection of premium Framer templates and launch your website in hours, not months.",
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