"use client";

import { useEffect, useState } from "react";
import BrandPulse from "@/components/animations/BrandPulse";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";


export default function Benefits() {

  const brands = [
    "/images/brands/lemon-squeezy.avif",
    "/images/brands/paypal.avif",
    "/images/brands/cal-com.avif",
    "/images/brands/stripe.avif",
    "/images/brands/gimkit.avif",
  ];

  const [expandedEven, setExpandedEven] = useState(true);

  useEffect(() => {
    // 0.5 detik animasi + 0.8 detik diam
    const interval = setInterval(() => {
      setExpandedEven((prev) => !prev);
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="mx-auto flex w-full flex-col items-center border-b border-[#212121] p-10 ">
          <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
            <span className="flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
              BENEFITS
            </span>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-center">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-5xl tablet:text-6xl desktop:text-7xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                P<em>r</em>ofess<em>i</em>o<em>n</em>al we<em>b</em>si<em>t</em>e,<br />li<em>v</em>e be<em>f</em>o<em>r</em>e t<em>h</em>e w<em>ee</em>ke<em>n</em>d
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2}>
              <p className="mx-auto mt-4 w-full max-w-2xl text-[13px] desktop:text-[14px] text-[#ABABAB]  tablet:leading-6">
                Go live with a website that&apos;s premium just like your<br />business. No code, no budget, just a few hours.
              </p>
            </FadeIn>
          </div>
        </section>
        <section className="grid grid-cols-1 tablet:grid-cols-3 w-full">
          <section className="border-r border-[#212121] flex flex-col  overflow-hidden">
            <FadeIn y={10} blur={0} duration={2} className="p-5 max-w-[340px]">
              <h1 className="font-gambetta text-[26px] tablet:text-[28px] desktop:text-[30px] font-medium leading-[1.3] tablet:leading-[1.02] tracking-tight text-white">No coding or design experience required</h1>
              <p className="mx-auto mt-4 w-full max-w-xl  text-[13px] leading-6 text-[#ABABAB] tablet:text-[15px] tablet:leading-6">
                Easily make edits, customize colors, and swap content so you don&apos;t have to start from scratch.
              </p>
            </FadeIn>
            <FadeIn y={10} blur={0} duration={2} className="h-full">
              <video
                className=" h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/videos/benefits-1.mp4" type="video/mp4" />
              </video>
            </FadeIn>
          </section>
          <section>
            <div className="p-5 space-y-5 border-b border-[#212121]">
              <div className="flex items-center gap-x-3 h-10">
                {brands.map((brand, index) => (
                  <BrandPulse
                    key={brand}
                    index={index}
                    expandedEven={expandedEven}
                  >
                    <Image
                      src={brand}
                      alt={brand}
                      width={35}
                      height={35}
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </BrandPulse>
                ))}
              </div>
              <div className="space-y-3">
                <h1 className="text-[#ABABAB] text-[11px] font-bold flex items-center gap-x-2"><FaArrowTrendUp className="text-[#33d478]" size={25} /> CONVERT MORE</h1>
                <p className="text-white text-[13px] tablet:text-[15px]">Designed to turn web visitors into customers.</p>
              </div>
            </div>
            <div className="flex flex-col p-5">
              <p className="text-white text-[13px] tablet:text-[15px]">Building a high-quality website<br />shouldn&apos;t cost you a fortune.</p>
              <span className="w-full bg-[#1a1a1a] p-2.5 rounded-sm text-[11px] tablet:text-[12px] font-bold mt-5 text-white">$5,000 – $20,000 </span>
              <p className="text-[#ABABAB] text-[11px] font-bold  mt-3">WEB DESIGNER / AGENCY</p>
              <span className="w-fit bg-[#ffffff4d] p-2.5 pr-6 rounded-sm text-[11px] tablet:text-[12px] font-bold mt-5 text-white">STARTING AT $99</span>
              <p className="text-[#ABABAB] text-[11px] font-bold  mt-3">FRAMER TEMPLATE</p>
            </div>
            <div>

            </div>
          </section>
          <section className="flex border-l border-[#212121] relative overflow-hidden">
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
                  src="/videos/tutorial-benefits.mp4"
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
                h-40
                bottom-0
                from-[#020209]
                bg-linear-to-t
                to-transparent
                via-[#020209]/70
                "
            />

            {/* Text */}
            <FadeIn
              y={10}
              blur={0}
              duration={2}
              className="
              bottom-0
              absolute
              z-10
              left-0
              p-5
              "
            >
              <h1 className="font-gambetta text-[26px] desktop:text-[28px] font-medium leading-[1.4] tablet:leading-[1.02] tracking-tight text-white">
                Step-by-step video
                <br />
                tutorials included
              </h1>

              <p className="mt-3 text-[13px] tablet:text-[15px] leading-6  text-[#ABABAB] desktop:text-[15px]">
                Each template comes with guided tutorials
                to help you from customization to launch.
              </p>
            </FadeIn>
          </section>
        </section>
      </section>
    </section>
  );
}
