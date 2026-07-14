"use client";
import FadeIn from "@/components/animations/FadeIn";
import InfiniteTicker from "@/components/animations/InfiniteTicker";
import Button from "@/components/layout/Button";
import Image from "next/image";
import { SiFramer } from "react-icons/si";

export default function HeroBundle() {

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
    <section className="relative mx-auto w-full max-w-[100vw] overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
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
      <div className="absolute inset-0 bg-black/50" />
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
      <div
        className="
                absolute
                inset-x-0
                h-40
                bottom-0
                from-[#020209]
                bg-linear-to-t
                to-transparent
                via-[#020209]/70
                "
      />
      <section
        className="
          relative
          mx-auto
          flex
          max-w-md
          flex-col
          items-center
          px-4
          pb-19
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
            <SiFramer size={17} />

            TEMPLATE BUNDLE
          </span>
        </FadeIn>


        <div className="mx-auto max-w-5xl pt-8 text-center">
          <FadeIn y={10} blur={8} duration={4}>
            <h1
              className="
                font-gambetta
                text-[clamp(2.25rem,10vw,6.25rem)]
                font-medium
                leading-[1.02]
                tracking-tight
                text-white
              "
            >
              G<em>e</em>t e<em>v</em>ery c<em>u</em>rre<em>n</em>t & f<em>u</em>tu<em>r</em>e te<em>m</em>pl<em>a</em>te
            </h1>
          </FadeIn>

          <FadeIn y={13} blur={8} duration={2}>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[17px] tablet:leading-8">
              Perfect for agencies and freelancers who need to deliver professional websites fast
            </p>
          </FadeIn>


          <FadeIn y={13} blur={0} duration={1}>
            <Button
              href="/"
              className="mt-7 w-full tablet:w-auto text-[16px] font-bold"
              rounded
              bgColor="bg-white"
              textColor="text-black"
            >
              Get the bundle
            </Button>
          </FadeIn>
          <h1 className="mt-8 flex justify-center font-gambetta text-[26px] tablet:text-[28px] desktop:text-[45px] font-medium leading-[1.3] tablet:leading-[1.02] tracking-tight text-white">$399 <span className="text-[#7c7c7e] line-through pl-2">$1,881</span></h1>

        </div>
      </section>
    </section>
  );
}