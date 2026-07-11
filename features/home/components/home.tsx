
import HeroBackground from "@/components/background/HeroBackground";
import Button from "@/components/Button";
import { SiFramer } from "react-icons/si";

export default function Home() {
  return (
    <section className="mx-auto w-full items-center border-b border-[#212121] px-10">
      <section
        aria-labelledby="home-heading"
        className="mx-auto flex  flex-col w-full items-center pt-40 pb-20 px-10 font-sans border border-[#212121] max-w-sm tablet:max-w-3xl desktop:max-w-[1440px] border-y-0 "
      >
        <HeroBackground />
        <span className="flex items-center font-bold mb-6 gap-x-2 py-1.5 px-4 rounded-sm text-[12px] text-[#ababab] bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)]"> <SiFramer size={17} /> FRAMER TEMPLATES</span>
        <div className="w-full max-w-5xl mx-auto text-center pt-2">
          <h1
            id="home-heading"
            className="text-[100px] font-medium tracking-tight leading-none text-white font-gambetta"
          >
            Webs<em>i</em>te te<em>m</em>pla<em>t</em>es d<em>e</em>si<em>g</em>n<em>e</em>d to co<em>n</em>ve<em>r</em>t
          </h1>
          <p className="mt-4 text-[17px] max-w-xl w-full mx-auto leading-8 text-[#ABABAB] ">
            Launch your online business today using an easy-to-customize Framer website template without writing a single line of code.
          </p>
          <Button className="font-bold text-[16px] mt-7" rounded textColor="text-black" bgColor="bg-[#ffffff]">Browse Template</Button>
        </div>
      </section>
    </section>

  );
}
