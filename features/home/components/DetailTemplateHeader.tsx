"use client";
import FadeIn from "@/components/animations/FadeIn";

interface Props {
  slug: string | undefined;
}

export default function DetailTemplateHeader({ slug }: Props) {


  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <section
        className="
          relative
          mx-auto
          flex
          max-w-md
          flex-col
          items-start
          border
          border-y-0
          border-[#212121] 
          px-5
          desktop:px-10
          pb-10
          pt-28
          tablet:max-w-4xl
          tablet:pt-40
          desktop:max-w-[1440px]
        "
      >
        <FadeIn y={10} blur={0} duration={4}>
          <h1
            id="home-heading"
            className="font-gambetta capitalize flex text-[16px] gap-5 desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
          >
            Home <span>{">"}</span> Templates <span>{">"}</span> {slug}
          </h1>
        </FadeIn>


      </section>
    </section>
  );
}