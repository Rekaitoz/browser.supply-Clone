"use client";

import { useEffect, useState } from "react";
import BrandPulse from "@/components/animations/BrandPulse";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { FaArrowTrendUp, FaInfinity } from "react-icons/fa6";
import { HiTemplate } from "react-icons/hi";
import { RiGlobalFill } from "react-icons/ri";
import { LuRefreshCcw } from "react-icons/lu";
import { SiFramer } from "react-icons/si";
import { PiVideoFill } from "react-icons/pi";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import Button from "@/components/Button";
import BundlePriceBackground from "@/components/background/BundlePriceBackground copy";


export default function Pricing() {

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
              PRICING
            </span>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-center">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-5xl tablet:text-6xl desktop:text-7xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                Nee<em>d</em> o<em>n</em>e te<em>m</em>pl<em>a</em>te o<em>r</em> all o<em>f</em> t<em>h</em>em?
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2}>
              <p className="mx-auto mt-4 w-full max-w-2xl text-[13px] desktop:text-[14px] text-[#ABABAB]  tablet:leading-6">
                Perfect for agencies and freelancers looking to deliver high-quality results at lightning speed.
              </p>
            </FadeIn>
          </div>
        </section>
        <section className="grid grid-cols-1 tablet:grid-cols-2 w-full">
          <section className="border-r border-[#212121] p-5 gap-9 overflow-hidden flex flex-col justify-between">
            <div className="space-y-9">
              <FadeIn y={10} blur={0} duration={2} className="w-full">
                <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2">ONE-TIME PAYMENT</h1>
                <h1 className="mt-8 flex justify-between font-gambetta text-[26px] tablet:text-[28px] desktop:text-[45px] font-medium leading-[1.3] tablet:leading-[1.02] tracking-tight text-white"><span>Single Template</span><span>$99</span></h1>
                <p className="mx-auto mt-4 w-full  text-[13px] leading-6 text-[#ABABAB] tablet:text-[15px] tablet:leading-6">
                  Choose a template best suited for you.
                </p>
              </FadeIn>
              {/* <span><HiTemplate /></span>
              <span><RiGlobalFill /></span>
              <span><LuRefreshCcw /></span>
              <span><FaInfinity /></span>
              <span><SiFramer /></span>
              <span><PiVideoFill /></span>
              <span><BiSolidShoppingBagAlt /></span> */}
              <FadeIn y={10} blur={0} duration={2} className="h-full space-y-4">
                <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2">INCLUDED:</h1>
                <span className="flex items-center gap-x-2 text-white text-md"><HiTemplate size={22} /> Instant access to chosen template</span>
                <span className="flex items-center gap-x-2 text-white text-md"><LuRefreshCcw size={22} /> Lifetime template updates</span>
                <span className="flex items-center gap-x-2 text-white text-md"><SiFramer size={22} /> 3 months Framer Pro</span>
                <span className="flex items-center gap-x-2 text-white text-md"><PiVideoFill size={22} /> Step-by-step video tutorials</span>
              </FadeIn>
            </div>
            <FadeIn y={13} blur={0} duration={1} delay={0.9}>
              <Button
                className="text-[16px] font-bold w-full"
                rounded
                textColor="text-white"
                bgColor="bg-[#1c1c1c]"
              >
                Browse Template
              </Button>
            </FadeIn>
          </section>
          <section className="border-r border-[#212121] p-5 gap-9 overflow-hidden flex flex-col justify-between relative overflow-x-hidden overflow-y-hidden">
            <BundlePriceBackground />
            <div className="space-y-9">
              <FadeIn y={10} blur={0} duration={2} className="w-full">
                <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2">ONE-TIME PAYMENT</h1>
                <h1 className="mt-8 flex justify-between font-gambetta text-[26px] tablet:text-[28px] desktop:text-[45px] font-medium leading-[1.3] tablet:leading-[1.02] tracking-tight text-white"><span>Bundle</span><span>$399 <span className="text-[#7c7c7e] line-through pl-2">$1,881</span></span></h1>
                <p className="mx-auto mt-4 w-full  text-[13px] leading-6 text-[#ABABAB] tablet:text-[15px] tablet:leading-6">
                  Every template, unlimited<br />sites. Build however you want.
                </p>
              </FadeIn>
              <FadeIn y={10} blur={0} duration={2} className="h-full space-y-4">
                <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2">INCLUDED:</h1>
                <span className="flex items-center gap-x-2 text-white text-md"><HiTemplate size={22} />All current templates</span>
                <span className="flex items-center gap-x-2 text-white text-md"><RiGlobalFill size={22} />Early access to all future templates</span>
                <span className="flex items-center gap-x-2 text-white text-md"><LuRefreshCcw size={22} /> Lifetime template updates</span>
                <span className="flex items-center gap-x-2 text-white text-md"><FaInfinity size={22} /> Use on unlimited sites</span>
                <span className="flex items-center gap-x-2 text-white text-md"><SiFramer size={22} /> 3 months Framer Pro</span>
                <span className="flex items-center gap-x-2 text-white text-md"><PiVideoFill size={22} /> Step-by-step video tutorials</span>
                <span className="flex items-center gap-x-2 text-white text-md"><BiSolidShoppingBagAlt size={22} /> Priority support</span>
              </FadeIn>
            </div>
            <FadeIn y={13} blur={0} duration={1} delay={0.9}>
              <Button
                className="text-[16px] font-bold w-full"
                rounded
                textColor="text-black"
                bgColor="bg-white"
              >
                Get the bundle
              </Button>
            </FadeIn>
          </section>
        </section>
      </section>
    </section>
  );
}
