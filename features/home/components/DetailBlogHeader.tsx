"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Blog } from "@/data/blog";

interface Props {
  blog: Blog;
}

export default function DetailBlogHeader({ blog }: Props) {

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative
          mx-auto
          flex
          max-w-md
          flex-col
          items-center
          border
          border-y-0
          border-[#212121]
          px-4
          pb-0
          pt-28
          tablet:max-w-4xl
          tablet:pt-30
          desktop:max-w-[1440px]"
      >
        <section className="mx-auto flex w-full flex-col items-center p-10 ">
          <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
            <div className="flex items-center gap-x-5 font-bold text-[12px] text-[#ababab] uppercase">
              <p>
                {/* {blog.category} */} Online Business
              </p>
              •
              <p>
                {/* {blog.publishedAt.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })} */}
                Jun 5, 2026
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-center">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-5xl tablet:text-6xl desktop:text-7xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                P<em>r</em>ofess<em>i</em>o<em>n</em>al we<em>b</em>si<em>t</em>e,<br />li<em>v</em>e be<em>f</em>o<em>r</em>e t<em>h</em>e w<em>ee</em>ke<em>n</em>d
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2}>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#ABABAB] tablet:text-[17px] tablet:leading-8">
                Go live with a website that&apos;s premium just like your<br />business. No code, no budget, just a few hours.
              </p>
            </FadeIn>
          </div>
        </section>
      </section>
    </section>
  );
}
