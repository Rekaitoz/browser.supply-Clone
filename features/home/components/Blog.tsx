import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { getBlogs } from "@/lib/api";
import { slugify } from "@/lib/slugify";

export default async function Blog() {
  const blogData = await getBlogs();

  {/* <div
  dangerouslySetInnerHTML={{
    __html: blog.content,
  }}
/> */}
  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="grid grid-cols-1 tablet:grid-cols-2 w-full">
          {blogData.map((blog) => (
            <Link
              href={`blog/${slugify(blog.title)}`}
              key={blog.id}
              className={`
                group
                flex flex-col
                transition-colors
                duration-300
                bg-[rgba(43,43,43,0)]
              border-[#212121]
                border-r
                border-b
                cursor-pointer
                `}
            >

              <FadeIn y={10} blur={0} duration={1.5} className="relative aspect-16/10 w-full ">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="
                    object-cover
                    rounded-sm
                    overflow-hidden
                    "
                />
              </FadeIn>
              <FadeIn y={10} blur={0} duration={1.5} className="space-y-3 px-5  py-5">
                <div className="flex items-center gap-x-5 font-bold text-[12px] text-[#ababab] uppercase">
                  <p>
                    {blog.category}
                  </p>
                  •
                  <p>
                    {blog.publishedAt.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-x-5">
                  <h2 className="font-gambetta text-[28px] text-white">
                    {blog.title}
                  </h2>
                </div>
              </FadeIn>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
}
