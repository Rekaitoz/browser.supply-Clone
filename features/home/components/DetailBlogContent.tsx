"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Blog } from "@/data/blog";

interface Props {
  blog: Blog;
}

export default function DetailBlogContent({ blog }: Props) {

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
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
          tablet:max-w-4xl
          desktop:max-w-[1440px]"
      >

        <section className="mx-auto flex w-full flex-col items-center px-0 desktop:px-46 py-10 h-full ">
          <FadeIn y={-13} blur={0} duration={1} delay={0.5} className="relative flex w-full h-full">
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />

          </FadeIn>
        </section>
      </section>
    </section>
  );
}
