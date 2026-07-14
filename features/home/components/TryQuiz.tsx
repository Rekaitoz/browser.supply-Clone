import FadeIn from "@/components/animations/FadeIn";
import InfiniteTicker from "@/components/animations/InfiniteTicker";
import Button from "@/components/layout/Button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TryQuiz() {

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
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 "
      >
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
        <section className="h-[680px] w-full flex flex-col tablet:flex-row gap-8 tablet:items-end justify-between px-5 tablet:px-20 pt-10 tablet:pt-16 desktop:pt-20 pb-10 border-b border-[#212121] max-w-md tablet:max-w-5xl desktop:max-w-[1540px]">
          <div className="w-full max-w-xl pt-2 text-left space-y-4">
            <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
              <span className="flex items-center w-fit gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
                60-SECOND QUIZ
              </span>
            </FadeIn>
            <FadeIn y={13} blur={0} duration={2}>
              <h1
                id="home-heading"
                className="font-gambetta text-[38px] tablet:text-[48px] desktop:text-[70px] font-medium leading-[1.02] tracking-tight text-white"
              >
                Not sure which template is for you?

              </h1>
            </FadeIn>

            <FadeIn y={13} blur={0} duration={2} >
              <p className="w-full max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[15px] tablet:leading-6">
                Answer a few short questions and get matched with a website template perfect for your business, with <span className="text-white">30% off</span>.
              </p>
            </FadeIn>
          </div>
          <FadeIn y={13} blur={0} duration={2}>
            <Button
              className="text-[16px] font-bold w-full tablet:w-auto"
              rounded
              rightIcon={<FaArrowRightLong size={10} />}
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              Take the quiz
            </Button>
          </FadeIn>
        </section>

      </section>
    </section>
  );
}
