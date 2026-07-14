"use client";

import FadeIn from "@/components/animations/FadeIn";
import { faqsData } from "@/data/faqs";
import FaqItem from "@/lib/FaqItem";
import { useState } from "react";

interface FaqProps {
  showHeader?: boolean;
}

export default function Faqs({
  showHeader = true,
}: FaqProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        {showHeader && (
          <section className="mx-auto flex w-full flex-col items-center border-b border-[#212121] p-10 ">
            <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
              <span className="flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
                FAQS
              </span>
            </FadeIn>

            <div className="mx-auto w-full max-w-5xl pt-8 text-center">
              <FadeIn y={10} blur={0} duration={4}>
                <h1
                  id="home-heading"
                  className="font-gambetta text-5xl tablet:text-6xl desktop:text-7xl max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
                >
                  Clea<em>r</em>i<em>n</em>g all dou<em>b</em>ts & co<em>n</em>ce<em>r</em>ns
                </h1>
              </FadeIn>

              <FadeIn y={10} blur={0} duration={2}>
                <p className="mx-auto mt-4 w-full max-w-2xl text-[13px] desktop:text-[14px] text-[#ABABAB]  tablet:leading-6">
                  Common questions from entrepreneurs looking to launch their business with a Framer website template.
                </p>
              </FadeIn>
            </div>
          </section>
        )}
        <section className="flex flex-col w-full">
          {faqsData.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onClick={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
            />
          ))}
        </section>
      </section>
    </section>
  );
}
