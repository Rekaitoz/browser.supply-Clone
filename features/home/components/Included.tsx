import FadeIn from "@/components/animations/FadeIn";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { FaInfinity } from "react-icons/fa6";
import { HiTemplate } from "react-icons/hi";
import { RiGlobalFill } from "react-icons/ri";


export default function Included() {

  const stats = [
    {
      value: <HiTemplate size={35} />,
      label: "All current templates",
    },
    {
      value: <RiGlobalFill size={35} />,
      label: "All future templates",
    },
    {
      value: <FaInfinity size={35} />,
      label: "Use on unlimited sites",
    },
    {
      value: <BiSolidShoppingBagAlt size={35} />,
      label: "Priority support",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <div className="grid grid-cols-2 desktop:grid-cols-4 w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`
          flex flex-col items-center justify-center
          px-8 py-10 text-center
          border-[#212121]
          border-r
          border-b
        `}
            >
              <FadeIn y={10} blur={0} duration={1.5}>
                <h2 className="text-[#ababab]">
                  {stat.value}
                </h2>
              </FadeIn>
              <FadeIn y={10} blur={0} duration={1.5}>
                <p className="mt-2 text-[14px] tablet:text-[14px] text-[#ababab]">
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
