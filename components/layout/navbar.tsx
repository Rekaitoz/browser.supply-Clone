"use client";

import Link from "next/link";

import { routes } from "@/config/routes";
import Button from "../button";
import { BsTwitterX, BsYoutube } from "react-icons/bs";

export default function Navbar() {

  return (
    <header className="sticky top-0 z-50 border-b py-5 px-10 border-zinc-200 bg-opac backdrop-blur-sm ">
      <div className="mx-auto flex h-16 items-center justify-between px-10 backdrop-blur-2xl  max-w-sm tablet:max-w-3xl desktop:max-w-full">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-zinc-600 "
        >
          Browser.clone
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1">

            {routes.map(({ href, label }) => {

              return (
                <li key={href}>
                  <Button className="font-bold text-xl" href={href}>{label}</Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <BsTwitterX size={20} />
          <BsYoutube size={24} />
          <Button className="font-bold text-xl" rounded bgColor="bg-[#1c1c1c]">Bundle</Button>
        </div>
      </div>
    </header>
  );
}
