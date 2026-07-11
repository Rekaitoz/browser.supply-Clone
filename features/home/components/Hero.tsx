
import Button from "@/components/Button";
import { SiFramer } from "react-icons/si";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 px-4 pb-16 pt-28 tablet:pt-40 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >

        <FadeIn y={-13} blur={0} duration={1} delay={0.9}>
          <span className="flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
            <SiFramer size={17} /> FRAMER TEMPLATES
          </span>
        </FadeIn>

        <div className="mx-auto w-full max-w-5xl pt-2 text-center">
          <FadeIn y={10} blur={8} duration={4}>
            <h1
              id="home-heading"
              className="font-gambetta text-[clamp(2.25rem,10vw,6.25rem)] font-medium leading-[1.02] tracking-tight text-white"
            >
              Webs<em>i</em>te te<em>m</em>pla<em>t</em>es d<em>e</em>si<em>g</em>n<em>e</em>d
              to co<em>n</em>ve<em>r</em>t
            </h1>
          </FadeIn>

          <FadeIn y={13} blur={8} duration={2} delay={0.45}>
            <p className="mx-auto mt-4 w-full max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[17px] tablet:leading-8">
              Launch your online business today using an easy-to-customize Framer
              website template without writing a single line of code.
            </p>
          </FadeIn>

          <FadeIn y={13} blur={0} duration={1} delay={0.9}>
            <Button
              className="mt-7 text-[16px] font-bold w-full tablet:w-auto"
              rounded
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              Browse Template
            </Button>
          </FadeIn>
        </div>
      </section>
    </section>
  );
}
