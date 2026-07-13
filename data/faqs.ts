// data/templates.ts

export interface faqs {
  id: number;

  question: string;

  answer: string;
}

export const faqsData: faqs[] = [
  {
    id: 1,
    question: "What do i need to get started?",
    answer:
      "All you need is a laptop, an idea, and a few hours. Many founders have launched their site within a single weekend — others take their time perfecting it. Framer is free to start using, and you’ll only need a paid plan when you’re ready to connect your custom domain and go live",
  },
  {
    id: 2,
    question: "What’s included with my purchase?",
    answer:
      "Each purchase gives you instant access to your customizable Framer template, lifetime updates, email support, and a detailed setup guide with step-by-step videos. You’ll just need a Framer account and your own custom domain when you’re ready to publish.",
  },
  {
    id: 3,
    question: "Is this beginner-friendly?",
    answer:
      "Absolutely. Your website is already 90% done — all you have to do is plug in your content, change the images, and publish. Even if you’ve never used Framer before, the editor is visual and intuitive, and I’ve included resources to help you get comfortable fast.",
  },
  {
    id: 4,
    question: "How do I start using the template",
    answer:
      "Once you buy a template, you’ll get a private link to duplicate it directly into your Framer account. From there, you can edit everything — text, colors, images, and sections — right inside the Framer editor.",
  },
  {
    id: 5,
    question: "Do I get updates or support after purchase?",
    answer:
      "Yes! You’ll receive lifetime updates for your template plus direct email support for any setup-related questions. I also send out occasional improvements and new features to keep your site performing at its best.",
  },
  {
    id: 6,
    question: "Can i use the same template for multiple websites?",
    answer:
      "Each license is valid for one website or client project. If you’d like to reuse the template for multiple brands or clients, then selcte Extended Licese at checkout",
  },
  {
    id: 7,
    question: "Do you offer refunds?",
    answer:
      "Because these are digital products, all sales are final. However, if you run into any technical issue or something doesn’t work as expected, reach out and I’ll make sure it’s resolved quickly.",
  },
];
