import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/layout/Button";

interface TestimonialProps {
  reverse?: boolean;
}

export default function Testimonial({
  reverse = false }: TestimonialProps
) {

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 mb-5">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto grid grid-cols-1 tablet:grid-cols-2 w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className={`mx-auto flex w-full flex-col items-start justify-center p-10 h-full ${reverse
          ? "tablet:order-2 tablet:border-l tablet:border-r-0"
          : "tablet:order-1 tablet:border-r tablet:border-l-0"} 
          border-[#212121]`}>
          <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
            <span className="flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
              CUSTOMER SUCCESS
            </span>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-start">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-4xl tablet:text-5xl desktop:text-6xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                M<em>a</em>tt lau<em>n</em>ched h<em>i</em>s ne<em>w</em> w<em>e</em>bs<em>i</em>te i<em>n</em> j<em>u</em>st 1 ho<em>u</em>r
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2} className="max-w-md">
              <p className="mx-auto mt-4 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                From burning out on 12-hour gym shifts to running his own online coaching business, on his own terms.
              </p>
              <p className="mx-auto mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                Matt had tried the agency route before. Thousands of dollars later, he had a terrible site and zero control over it.
              </p>
              <p className="mx-auto mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-[#ABABAB]  tablet:leading-6">
                I showed him the right template. We sat in a café, he made the edits himself, and launched in 1 hour.
              </p>
              <p className="border-l-2 border-white pl-5 mt-3 w-full max-w-2xl text-[14px] desktop:text-[15px] text-white  tablet:leading-6">
                No design skills. No coding. Barely any laptop experience. Didn&apos;t need any.
              </p>
            </FadeIn>
          </div>
          <FadeIn y={13} blur={0} duration={1} delay={0.9} className="flex flex-col mt-7 desktop:flex-row gap-4 w-full">
            <Button
              className="text-[16px] font-bold w-full desktop:w-auto"
              rounded
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              View Template Matt used
            </Button>
            <Button
              className="text-[16px] font-bold w-full desktop:w-auto"
              rounded
              textColor="text-white"
              bgColor="bg-[#1c1c1c]"
            >
              View other customer&apos; sites
            </Button>
          </FadeIn>
        </section>
        <FadeIn y={10} blur={0} duration={2} className={`h-full ${reverse ? "tablet:order-1" : "tablet:order-2"}`}>
          <video
            className=" h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/testimonial.mp4" type="video/mp4" />
          </video>
        </FadeIn>
      </section>
    </section>
  );
}
