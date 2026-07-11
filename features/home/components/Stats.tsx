import FadeIn from "@/components/animations/FadeIn";


export default function Stats() {

  const stats = [
    {
      value: "6+",
      label: "Years building sites",
    },
    {
      value: "5/5",
      label: "Template rating",
    },
    {
      value: "2,000+",
      label: "Templates sold",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <div className="grid grid-cols-2 tablet:grid-cols-3 w-full">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
          flex flex-col items-center justify-center
          px-8 py-10 text-center

          border-[#212121]

          first:border-r
          

          ${index === 2
                  ? "col-span-2 tablet:col-span-1 tablet:border-l tablet:border-t-0 border-t border-l-0"
                  : ""
                }
        `}
            >
              <FadeIn y={10} blur={0} duration={1.5}>
                <h2 className="font-gambetta text-[32px] tablet:text-[36px] desktop:text-[44px] text-white">
                  {stat.value}
                </h2>
              </FadeIn>
              <FadeIn y={10} blur={0} duration={1.5}>
                <p className="mt-2 text-[14px] tablet:text-[16px] text-[#ababab]">
                  {stat.label}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
