import FadeIn from "@/components/animations/FadeIn";
import ReviewTicker from "@/components/animations/ReviewTicker";
import Button from "@/components/layout/Button";
import Image from "next/image";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { getReviews } from "@/lib/api";
import { createTickerRows } from "@/lib/createTickerRow";

export default async function Review() {
  const reviewData = await getReviews();

  interface Review {
    review: string;
    star: number;
    image: string;
    name: string;
  }

  const rows = createTickerRows(reviewData);

  function ReviewCard({ item }: { item: Review }) {
    return (
      <div className="w-[410px] flex flex-col justify-between shrink-0 border-b border-r border-[#212121] p-5">
        <div>
          <h1 className="text-[#ABABAB] text-[40px] font-medium flex items-center gap-x-2">&quot;</h1>
          <h1
            id="home-heading"
            className="font-gambetta text-[28px] tablet:text-[28px] desktop:text-[28px] font-medium leading-[1.3] tracking-tight text-white"
          >
            {item.review}
          </h1>
        </div>
        <div>
          <span className="flex items-center gap-2 mt-3">
            {Array.from({ length: item.star }).map((_, index) => (
              <FaStar key={`${item.name}_${index}`} size={24} />
            ))}
          </span>
          <div className="flex items-center gap-4 mt-6">
            <div className="relative aspect-4/4 w-auto h-10 shadow-[0px_0.784px_0.392px_-0.357px_rgba(0,0,0,0.13),0px_1.92px_0.96px_-0.714px_rgba(0,0,0,0.13),0px_3.637px_1.819px_-1.071px_rgba(0,0,0,0.13),0px_6.35px_3.175px_-1.429px_rgba(0,0,0,0.13),0px_11.052px_5.526px_-1.786px_rgba(0,0,0,0.13),0px_20.243px_10.121px_-2.143px_rgba(0,0,0,0.13),0px_40px_20px_-2.5px_rgba(0,0,0,0.13)]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="
                    object-cover
                    rounded-sm
                    overflow-hidden
                    "
              />
            </div>
            <p className="w-full max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[15px] tablet:leading-8">
              {item.name}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="w-full flex flex-col tablet:flex-row gap-8 tablet:items-end justify-between px-5 tablet:px-10 pt-10 tablet:pt-16 desktop:pt-20 pb-10 border-b border-[#212121]">
          <div className="w-full max-w-lg pt-2 text-left space-y-4">
            <FadeIn y={13} blur={0} duration={2}>
              <h1
                id="home-heading"
                className="font-gambetta text-[38px] tablet:text-[48px] desktop:text-[56px] font-medium leading-[1.02] tracking-tight text-white"
              >
                Tr<em>u</em>ste<em>d</em> b<em>y</em> 2<em>k</em>+ c<em>u</em>sto<em>m</em>ers a<em>r</em>ou<em>n</em>d t<em>h</em>e <em>g</em>lobe
              </h1>
            </FadeIn>

            <FadeIn y={13} blur={0} duration={2} >
              <p className="w-full max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[17px] tablet:leading-8">
                Speed, simplicity, and results. That&apos;s what customers achieve with my Framer website templates.
              </p>
            </FadeIn>
          </div>
          <FadeIn y={13} blur={0} duration={2}>
            <Button
              href="/live"
              className="text-[16px] font-bold w-full tablet:w-auto"
              rounded
              rightIcon={<FaArrowRightLong size={10} />}
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              See real customer websites
            </Button>
          </FadeIn>
        </section>
        <FadeIn y={13} blur={0} duration={2} className="flex w-full">
          <div className="flex flex-col w-full">

            <ReviewTicker direction="left" duration={30}>
              {rows[0].map(item => (
                <ReviewCard
                  key={item.name}
                  item={item}
                />
              ))}
            </ReviewTicker>

            <ReviewTicker direction="right" duration={30}>
              {rows[1].map(item => (
                <ReviewCard
                  key={item.name}
                  item={item}
                />
              ))}
            </ReviewTicker>

            <ReviewTicker direction="left" duration={30}>
              {rows[2].map(item => (
                <ReviewCard
                  key={item.name}
                  item={item}
                />
              ))}
            </ReviewTicker>

          </div>
        </FadeIn>
      </section>
    </section>
  );
}
