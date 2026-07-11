import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

import Footer from "@/components/layout/footer";


import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const gambetta = localFont({
  src: [
    {
      path: "../fonts/gambetta/Gambetta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/gambetta/Gambetta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/gambetta/Gambetta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/gambetta/Gambetta-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/gambetta/Gambetta-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gambetta",
  display: "swap",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Browser Clone",
  description: "A browser clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gambetta.variable} h-full overflow-x-hidden antialiased `}
    >
      <body className="relative flex min-h-full flex-col">
        {/* <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white dark:focus:bg-zinc-50 dark:focus:text-zinc-900"
        >
          Skip to main content
        </a> */}
        <Navbar />
        <main id="main-content" className="flex flex-1 flex-col ">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
