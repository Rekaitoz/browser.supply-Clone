import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/Button";

export default function Framer() {

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
            <source src="/videos/framer.mp4" type="video/mp4" />
          </video>
        </FadeIn>
        <section className="mx-auto flex w-full flex-col items-start justify-center p-10 h-full order-1 tablet:order-2">
          <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
            <span className="flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
              FRAMER
            </span>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-start">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-4xl tablet:text-5xl desktop:text-6xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                Po<em>w</em>ered b<em>y</em> a si<em>m</em>p<em>l</em>e & f<em>l</em>e<em>x</em>ibl<em>e</em> <em>w</em>e<em>b</em>si<em>t</em>e b<em>u</em>ilder
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2}>
              <p className="mx-auto mt-4 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                Packed with speed and powerful tools to help your site stand out. Design, personalize, and launch. All in one place with Framer.
              </p>
            </FadeIn>
          </div>
          <FadeIn y={13} blur={0} duration={1} delay={0.9} className="flex flex-col mt-7 tablet:flex-row gap-4 w-full">
            <Button
              className="text-[16px] font-bold w-full tablet:w-auto"
              rounded
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              Browse Template
            </Button>
            <Button
              className="text-[16px] font-bold w-full tablet:w-auto"
              rounded
              textColor="text-white"
              bgColor="bg-[#1c1c1c]"
            >
              Explore Framer
            </Button>
          </FadeIn>
        </section>
      </section>
    </section>
  );
}
