import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/layout/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Founder() {


  const stats = [
    {
      value: "6+",
      label: "Years building sites",
    },
    {
      value: "100+",
      label: "Websites made",
    },
    {
      value: "$100k",
      label: "Revenue made in Framer",
    },
    {
      value: "2k+",
      label: "Customers worldwide",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 mb-5">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto grid grid-cols-1 tablet:grid-cols-2 w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <FadeIn y={10} blur={0} duration={2} className="h-full border-t tablet:border-t-0 tablet:border-r border-[#212121] order-2 tablet:order-1">
          <video
            className=" h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/founder.mp4" type="video/mp4" />
          </video>
        </FadeIn>
        <section className="mx-auto flex w-full flex-col items-start justify-center h-full order-1 tablet:order-2">
          <div className="py-10 px-5 tablet:px-5 desktop:px-10">

            <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
              <span className="flex w-fit items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
                FOUNDER
              </span>
            </FadeIn>

            <div className="mx-auto w-full max-w-5xl pt-8 text-start">
              <FadeIn y={10} blur={0} duration={4}>
                <h1
                  id="home-heading"
                  className="font-gambetta text-4xl tablet:text-5xl desktop:text-6xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
                >
                  Hey, I&apos;m Ramish
                  Designer & Creator
                </h1>
              </FadeIn>

              <FadeIn y={10} blur={0} duration={2} className="max-w-md">
                <p className="mx-auto mt-4 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                  When I started my business, I realised speed was everything. Getting a website live meant getting customers through the door.
                </p>
                <p className="mx-auto mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                  Luckily, I knew how to design and build sites, so what could have taken weeks only took me hours.
                </p>
                <p className="mx-auto mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                  That first week, I had my website live, and sales rolling in.
                </p>
                <p className="mx-auto mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                  Now, I’m sharing my unfair advantage with other creative entrepreneurs so they can do the same.
                </p>
                <p className="mx-auto mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                  Launch faster without the cost or complexity.
                </p>
              </FadeIn>
            </div>

          </div>
          <div className="grid grid-cols-2 tablet:grid-cols-2 w-full border-y border-[#212121]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`
                  flex flex-col items-center justify-center
                  px-2 py-8 text-center
                  
                  border-[#212121]
                  
                  first:border-b
                  first:border-r
                  last:border-t
                  last:border-l

                  `}
              >
                <FadeIn y={10} blur={0} duration={1.5}>
                  <h2 className="font-gambetta text-[32px] tablet:text-[36px] desktop:text-[44px] text-white">
                    {stat.value}
                  </h2>
                </FadeIn>
                <FadeIn y={10} blur={0} duration={1.5}>
                  <p className="mt-2 text-[14px] tablet:text-[16px] text-[#ababab]">
                    {stat.label}
                  </p>
                </FadeIn>
              </div>
            ))}
          </div>
          <FadeIn y={10} blur={0} duration={1} className="flex flex-col tablet:flex-row gap-4 w-full">
            <Button
              exLink="https://cal.com/ramish-design/mentoring"
              className="text-[16px] font-bold w-full"
              rightIcon={<FaArrowRightLong size={10} />}
              textColor="text-black"
              bgColor="bg-[#ffffff]"

            >
              Book a call with me
            </Button>
          </FadeIn>
        </section>
      </section>
    </section>
  );
}
