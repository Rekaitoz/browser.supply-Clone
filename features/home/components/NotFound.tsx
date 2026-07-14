"use client";

import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/Button";

export default function NotFound() {

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-hidden h-dvh px-4 tablet:px-6 desktop:px-10">
      <section
        className="
          relative
          mx-auto
          flex
          h-full
          max-w-md
          flex-col
          items-center
          justify-center
          border
          border-y-0
          border-[#212121]
          px-4
          pb-16
          pt-28
          tablet:max-w-4xl
          tablet:pt-40
          desktop:max-w-[1440px]
        "
      >
        <FadeIn y={-13} blur={0} duration={1}>
          <span
            className="
                flex
                items-center
                gap-2
                rounded-sm
                bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)]
                px-4
                py-1.5
                text-xs
                font-bold
                text-[#ababab]
              "
          >


            ERROR 404
          </span>
        </FadeIn>

        <div className="mx-auto max-w-5xl pt-2 text-center">
          <FadeIn y={10} blur={8} duration={4}>
            <h1
              className="
                font-gambetta
                text-[clamp(2.25rem,10vw,6.25rem)]
                font-medium
                leading-[1.02]
                tracking-tight
                text-white
                max-w-xl
              "
            >
              No templates here
            </h1>
          </FadeIn>

          <FadeIn y={13} blur={8} duration={2}>
            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-7 text-[#ABABAB] tablet:text-[17px] tablet:leading-8">
              Seems you got lost. No worries, let&apos;s find the perfect website template.
            </p>
          </FadeIn>

          <FadeIn y={13} blur={0} duration={1}>
            <Button
              href={"/"}
              className="mt-7 w-full tablet:w-auto text-[16px] font-bold"
              rounded
              bgColor="bg-white"
              textColor="text-black"
            >
              Go home
            </Button>
          </FadeIn>

        </div>
      </section>
    </section>
  );
}