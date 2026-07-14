import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import SmoothScroll from "@/components/providers/SmoothScroll";

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

export const metadata: Metadata = {
  title: {
    default: "Framer Template Bundle: Every Template for $399 | Browser.upply",
    template: "Framer Template Bundle: Every Template for $399 | Browser.upply",
  },
  description: "Professional Framer website templates starting at $99. Trusted by 2000+ customers. Launch your business site in hours with step by step video tutorials.",
  icons: {
    icon: "/images/logo/logo-1.avif",
    shortcut: "/images/logo/logo-1.avif",
    apple: "/images/logo/logo-1.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gambetta.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex flex-1 flex-col overflow-x-hidden">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
