"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/layout/Button";
import { templates } from "@/data/templates";
import { ImSpinner2 } from "react-icons/im";


export default function Contact() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    template: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



    setLoading(true);

    // simulate request
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative mx-auto w-full max-w-[100vw] overflow-x-hidden overflow-hidden border-b border-[#212121] px-4 tablet:px-6 desktop:px-10 ">
      <section
        aria-labelledby="home-heading"
        className="relative mx-auto flex w-full flex-col items-center border border-[#212121] border-y-0 font-sans max-w-md tablet:max-w-4xl desktop:max-w-[1440px]"
      >
        <section className="mx-auto flex w-full flex-col items-center border-b border-[#212121] p-10 ">
          <FadeIn y={-13} blur={0} duration={1} delay={0.5}>
            <span className="flex items-center gap-x-2 rounded-sm bg-[radial-gradient(86%_150%_at_47%,#fff0_0%,#fff3_100%)] px-4 py-1.5 text-[12px] font-bold text-[#ababab]">
              CONTACT
            </span>
          </FadeIn>

          <div className="mx-auto w-full max-w-5xl pt-8 text-center">
            <FadeIn y={10} blur={0} duration={4}>
              <h1
                id="home-heading"
                className="font-gambetta text-5xl tablet:text-6xl desktop:text-7xl desktop:max-w-3xl mx-auto font-medium leading-[1.02] tracking-tight text-white"
              >
                Still unsure? Message me below
              </h1>
            </FadeIn>

            <FadeIn y={10} blur={0} duration={2}>
              <p className="mx-auto mt-4 w-full max-w-2xl text-[13px] desktop:text-[14px] text-[#ABABAB]  tablet:leading-6">
                Send me a message and I&apos;ll get back to you within 48 hours. Please provide as much detail as below.
              </p>
            </FadeIn>
          </div>
        </section>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 w-full">
          <section className="grid grid-cols-1 tablet:grid-cols-2 w-full">
            <div className="border border-[#212121] pt-4">
              <h1 className="text-[#ABABAB] text-[12px] font-bold px-5 py-3 uppercase">FIRST NAME<span className="text-red-500">*</span></h1>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Bruce"
                required
                className="bg-[#1c1c1c4d] placeholder:text-[#abababb3] text-white w-full text-[14px] px-5 py-4" />
            </div>
            <div className="border border-[#212121] pt-4">
              <h1 className="text-[#ABABAB] text-[12px] font-bold px-5 py-3 uppercase">LAST NAME<span className="text-red-500">*</span></h1>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Wayne"
                required
                className="bg-[#1c1c1c4d] placeholder:text-[#abababb3] text-white w-full text-[14px] px-5 py-4" />
            </div>
            <div className="border border-[#212121] pt-4">
              <h1 className="text-[#ABABAB] text-[12px] font-bold px-5 py-3 uppercase">EMAIL<span className="text-red-500">*</span></h1>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="bruce@waynenterprise.com"
                required
                className="bg-[#1c1c1c4d] placeholder:text-[#abababb3] text-white w-full text-[14px] px-5 py-4" />
            </div>
            <div className="border border-[#212121] pt-4">
              <h1 className="text-[#ABABAB] text-[12px] font-bold px-5 py-3 uppercase">Which template are you using?<span className="text-red-500">*</span></h1>
              <select
                name="template"
                value={form.template}
                onChange={handleChange}
                required
                className={`bg-[#1c1c1c4d]  w-full text-[14px] px-5 py-4  ${form.template
                  ? "text-white"
                  : "text-[#ababab]"
                  }`} >
                <option value="" disabled className="bg-white text-[#abababb3] ">
                  Select...
                </option>
                {templates.map((template) => (
                  <option
                    key={template.id}
                    value={template.name}
                    className="bg-white text-black"
                  >
                    {template.name}
                  </option>
                ))}
              </select>
            </div>
          </section>
          <div className="border border-[#212121] pt-4">
            <h1 className="text-[#ABABAB] text-[12px] font-bold px-5 py-3 uppercase">Provide a detailed explanation of your problem/question<span className="text-red-500">*</span></h1>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Gotham needs me..."
              rows={3}
              required
              className="bg-[#1c1c1c4d] min-h-[90px] placeholder:text-[#abababb3] text-white w-full text-[14px] px-5 py-4 resize-y" />
          </div>
          <FadeIn y={10} blur={0} duration={1} className="flex flex-row gap-4 w-full">
            <Button
              type="submit"
              disabled={loading || submitted}
              className="text-[16px] font-semibold w-full"
              textColor="text-black"
              bgColor="bg-[#ffffff]"
            >
              {loading
                ? <span className="flex items-center gap-2">
                  <ImSpinner2 className="animate-spin" />
                </span>
                : submitted
                  ? "Thank you!"
                  : "Submit"}
            </Button>
          </FadeIn>

        </form>
      </section>
    </section>
  );
}
