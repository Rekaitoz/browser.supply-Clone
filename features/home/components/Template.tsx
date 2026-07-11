import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { templates } from "@/data/templates";
import { getBadgeClass } from "@/lib/badge";
import Image from "next/image";

export default function Template() {

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 mb-5">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="w-full flex flex-col tablet:flex-row gap-8 tablet:items-end justify-between px-5 tablet:px-10 pt-10 tablet:pt-16 desktop:pt-20 pb-10 border-b border-[#212121]">
          <div className="w-full max-w-lg pt-2 text-left space-y-4">
            <FadeIn y={10} blur={8} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-[38px] tablet:text-[48px] desktop:text-[56px] font-medium leading-[1.02] tracking-tight text-white"
              >
                Pre<em>m</em>ium tem<em>p</em>lat<em>e</em>s b<em>u</em>ilt to dri<em>v</em>e <em>r</em>esul<em>t</em>s

              </h1>
            </FadeIn>

            <FadeIn y={13} blur={8} duration={2} delay={0.45}>
              <p className="w-full max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[17px] tablet:leading-8">
                Pick a template, swap in your content, and go live. Your business website can be up and running this afternoon.
              </p>
            </FadeIn>
          </div>
          <FadeIn y={13} blur={0} duration={1} delay={0.9}>
            <Button
              className="text-[16px] font-bold w-full tablet:w-auto"
              rounded
              rightIcon={<FaArrowRightLong size={10} />}
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              View All
            </Button>
          </FadeIn>
        </section>
        <section className="grid grid-cols-1 tablet:grid-cols-3 w-full">
          {templates.slice(0, 3).map((template) => (
            <div
              key={template.id}
              className={`
          group
    flex flex-col
    px-8
    py-10
    transition-colors
    duration-300
    gap-8
    bg-[rgba(43,43,43,0)]
    hover:bg-[rgba(43,43,43,0.5)]

    border-[#212121]
    first:border-r
    last:border-l
    cursor-pointer
        `}
            >
              <div className="relative aspect-16/10 w-full ">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="
      object-cover
      rounded-sm
      overflow-hidden
      transition-transform
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:-translate-y-4
    "
                />
              </div>
              <FadeIn y={10} blur={0} duration={1.5} className="space-y-3">
                <div className="flex items-center gap-x-5">
                  <h2 className="font-gambetta text-[32px] tablet:text-[36px] desktop:text-[28px] text-white">
                    {template.name}
                  </h2>
                  {template.badge && (
                    <span
                      className={`
                        rounded-sm
                        px-2.5
                        py-1
                        text-sm
                        font-semibold
                        ${getBadgeClass(template.badge)}
                    `}
                    >
                      {template.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-x-5 font-bold text-[12px] tablet:text-[12px] text-[#ababab]">
                  <p>
                    {template.shortDesc}
                  </p>
                  •
                  <p>
                    ${template.price} USD
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
