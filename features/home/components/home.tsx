import HeroBackground from "@/components/background/HeroBackground";
import Button from "@/components/Button";
import FadeInOnce from "@/components/animations/FadeInOnce";
import { SiFramer } from "react-icons/si";

export default function Home() {
  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <HeroBackground />

      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 px-4 pb-16 pt-28 tablet:pt-40 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >

        <FadeInOnce trigger="mount" delay={0}>
          <span className="mb-6 flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
            <SiFramer size={17} /> FRAMER TEMPLATES
          </span>
        </FadeInOnce>

        <div className="mx-auto w-full max-w-5xl pt-2 text-center">
          <FadeInOnce trigger="mount" delay={120}>
            <h1
              id="home-heading"
              className="font-gambetta text-[clamp(2.25rem,10vw,6.25rem)] font-medium leading-[1.02] tracking-tight text-white"
            >
              Webs<em>i</em>te te<em>m</em>pla<em>t</em>es d<em>e</em>si<em>g</em>n<em>e</em>d
              to co<em>n</em>ve<em>r</em>t
            </h1>
          </FadeInOnce>

          <FadeInOnce trigger="mount" delay={240}>
            <p className="mx-auto mt-4 w-full max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[17px] tablet:leading-8">
              Launch your online business today using an easy-to-customize Framer
              website template without writing a single line of code.
            </p>
          </FadeInOnce>

          <FadeInOnce trigger="mount" delay={360}>
            <Button
              className="mt-7 text-[16px] font-bold"
              rounded
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              Browse Template
            </Button>
          </FadeInOnce>
        </div>

        <FadeInOnce trigger="scroll" delay={0} className="mt-20 w-full">
          <div className="mx-auto grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-[#212121] pt-10 text-center tablet:gap-8">
            <div>
              <p className="font-gambetta text-2xl text-white tablet:text-3xl">6+</p>
              <p className="mt-1 text-xs text-[#ababab] tablet:text-sm">
                Years building sites
              </p>
            </div>
            <div>
              <p className="font-gambetta text-2xl text-white tablet:text-3xl">2,000+</p>
              <p className="mt-1 text-xs text-[#ababab] tablet:text-sm">
                Templates sold
              </p>
            </div>
            <div>
              <p className="font-gambetta text-2xl text-white tablet:text-3xl">5/5</p>
              <p className="mt-1 text-xs text-[#ababab] tablet:text-sm">
                Template rating
              </p>
            </div>
          </div>
        </FadeInOnce>
      </section>
    </section>
  );
}
