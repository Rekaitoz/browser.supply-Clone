import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/Button";
import { getBadgeClass } from "@/lib/badge";
import Image from "next/image";

export default function TemplateDetail() {

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 mb-5">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto grid grid-cols-1 tablet:grid-cols-2 w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <FadeIn y={10} blur={0} duration={2} className="flex justify-center items-center p-10 h-full border-t tablet:border-t-0 tablet:border-r border-[#212121] order-2 tablet:order-1">
          <div className="relative aspect-16/10 w-full ">
            <Image
              src='/images/templates/template-1.avif'
              alt="/images/templates/template-1.avif"
              fill
              className="
                    object-cover
                    rounded-sm
                    overflow-hidden
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    "
            />
          </div>
        </FadeIn>
        <section className={`mx-auto flex w-full flex-col items-start justify-center p-6 desktop:p-10 h-full 
          border-[#212121] order-1 tablet:order-2`}>
          <FadeIn y={-13} blur={0} duration={1} delay={0.5} className="flex justify-between items-center w-full">
            <h1 className="text-[#ABABAB] text-[12px] font-bold flex items-center gap-x-2 desktop:uppercase">Selene</h1>
            <span
              className={`
                        rounded-sm
                        px-2.5
                        py-1
                        text-sm
                        font-semibold
                        uppercase
                        text-[12px]
                        ${getBadgeClass("New")}
                    `}
            >
              New
            </span>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-start">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-[34px] tablet:text-[36px] desktop:text-[45px] desktop:max-w-lg  font-medium leading-[1.02] tracking-tight text-white"
              >
                An AI analytics website template built for data-driven SaaS companies
              </h1>
              <h1
                id="home-heading"
                className="pt-4 font-gambetta text-[28px] desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                $129
                USD
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2} className="max-w-md">
              <p className="mx-auto mt-4 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                Selene is a premium Framer template built for AI analytics platforms and data-driven SaaS companies who want to look intelligent, trustworthy, and attract teams ready to make smarter decisions from day one.
              </p>
              <p className="border-l-2 border-white pl-5 mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-white  tablet:leading-6">
                Perfect for: AI startups & analytics platforms.
              </p>
            </FadeIn>
          </div>
          <FadeIn y={13} blur={0} duration={1} delay={0.9} className="flex mt-7 flex-row gap-4 w-full">
            <Button
              className="text-[16px] font-bold w-full"
              rounded
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              Buy Template
            </Button>
            <Button
              className="text-[16px] font-bold w-full "
              rounded
              textColor="text-white"
              bgColor="bg-[#1c1c1c]"
            >
              View demo
            </Button>
          </FadeIn>
        </section>
      </section>
    </section>
  );
}
