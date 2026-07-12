"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import InfiniteTicker from "@/components/animations/InfiniteTicker";

export default function Process() {

  const cards = [
    "/images/templates/template-1.avif",
    "/images/templates/template-2.avif",
    "/images/templates/template-3.avif",
    "/images/templates/template-4.avif",
    "/images/templates/template-5.avif",
    "/images/templates/template-6.avif",
  ];

  const columns = [
    cards.slice(0, 3),
    cards.slice(3, 6),
  ].map((column) =>
    column.map((image) => (
      <Image
        key={image}
        src={image}
        alt=""
        width={400}
        height={406}
        className="w-full rounded-md object-cover"
        draggable={false}
      />
    ))
  );

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="mx-auto flex w-full flex-col items-center border-b border-[#212121] p-10 ">
          <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
            <span className="flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
              PROCESS
            </span>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-center">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-5xl tablet:text-6xl desktop:text-7xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                Go li<em>v</em>e i<em>n</em> ho<em>u</em>rs,<br />not <em>m</em>ont<em>h</em>s
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2}>
              <p className="mx-auto mt-4 w-full max-w-2xl text-[13px] desktop:text-[14px] text-[#ABABAB]  tablet:leading-6">
                Three steps. That&apos;s all it takes to get your website online. Pick a template, add your content, and hit publish.
              </p>
            </FadeIn>
          </div>
        </section>
        <section className="grid grid-cols-1 tablet:grid-cols-3 w-full">
          <section className=" relative border-r border-[#212121] flex flex-col overflow-hidden">
            <section className="relative h-[300px] tablet:h-[400px]  overflow-hidden">
              <InfiniteTicker
                columns={columns}
                speed={22}
                gap={15}
                className="
                rotate-16
                scale-[1.3]
                translate-x-20
                -translate-y-28
                "
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Bottom Gradient */}
              <div
                className="
                absolute
                inset-x-0
                h-64
                top-0
                bg-linear-to-b
                from-[#020209]
                via-[#020209]/70
                to-transparent
                "
              />
              {/* Text */}
              <FadeIn
                y={10}
                blur={0}
                duration={2}
                className="
                top-0
                absolute
                z-10
                left-0
                p-5
                "

              >
                <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2">STEP 1</h1>

                <h1 className="mt-8 font-gambetta text-[26px] desktop:text-[28px] font-medium leading-[1.4] tablet:leading-[1.02] tracking-tight text-white">
                  Select a template
                </h1>

                <p className="mt-4 text-[13px] tablet:text-[15px] leading-6  text-[#ABABAB] desktop:text-[15px]">
                  Choose from the range of<br />expert-crafted templates.
                </p>
              </FadeIn>

            </section>
          </section>
          <section className="flex relative overflow-hidden">
            <FadeIn y={10} blur={0} duration={2}>
              <video
                className="
                  h-full
                  w-full
                  object-cover
                  "
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="/videos/process-1.mp4"
                  type="video/mp4"
                />
              </video>
            </FadeIn>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Bottom Gradient */}
            <div
              className="
              absolute
              inset-x-0
              h-64
              top-0
              bg-linear-to-b
              from-[#020209]
              via-[#020209]/70
              to-transparent
              "
            />
            {/* Text */}
            <FadeIn
              y={10}
              blur={0}
              duration={2}
              className="
              top-0
              absolute
              z-10
              left-0
              p-5
              "
            >
              <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2">STEP 2</h1>

              <h1 className="mt-8 font-gambetta text-[26px] desktop:text-[28px] font-medium leading-[1.4] tablet:leading-[1.02] tracking-tight text-white">
                Make it yours
              </h1>

              <p className="mt-4 text-[13px] tablet:text-[15px] leading-6  text-[#ABABAB] desktop:text-[15px]">
                Change text, customize colors, and swap images with ease.
              </p>
            </FadeIn>
          </section>
          <section className="flex border-l border-[#212121] relative overflow-hidden h-full">
            <FadeIn y={10} blur={0} duration={2}>
              <video
                className="
                  h-full
                  w-full
                  object-cover
                  "
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="/videos/process-2.mp4"
                  type="video/mp4"
                />
              </video>
            </FadeIn>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Bottom Gradient */}
            <div
              className="
              absolute
              inset-x-0
              h-64
              top-0
              bg-linear-to-b
              from-[#020209]
              via-[#020209]/70
              to-transparent
              "
            />
            {/* Text */}
            <FadeIn
              y={10}
              blur={0}
              duration={2}
              className="
              top-0
              absolute
              z-10
              left-0
              p-5
              "
            >
              <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2">STEP 3</h1>

              <h1 className="mt-8 font-gambetta text-[26px] desktop:text-[28px] font-medium leading-[1.4] tablet:leading-[1.02] tracking-tight text-white">
                Go live instantly
              </h1>

              <p className="mt-4 text-[13px] tablet:text-[15px] leading-6  text-[#ABABAB] desktop:text-[15px]">
                Launch your site in seconds with just one click. Fast, simple, and code-free.
              </p>
            </FadeIn>
          </section>
        </section>
      </section>
    </section>
  );
}
