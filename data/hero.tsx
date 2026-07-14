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

  "/live": {
    badge: {
      text: "LIVE EXAMPLES",
    },
    title: (
      <>
        R<em>e</em>al s<em>i</em>tes b<em>u</em>ilt fro<em>m</em> a te<em>m</em>plate
      </>
    ),

    description:
      "A showcase of real customer websites, live right now, built using my Framer website templates.",
  },
  "/support": {
    badge: {
      text: "SUPPORT",
    },
    title: (
      <>
        He<em>r</em>e to h<em>e</em>lp<br />w<em>h</em>en <em>y</em>ou nee<em>d</em>
      </>
    ),

    description:
      "Do you have any trouble or questions? Check out the FAQs below or scroll a little further to contact me directly",
  },
};