import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContext from "@/context/activeSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duc Vo | Personal Portfolio",
  description: "Test Portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // bg-gradient-to-tl from-purple-900 via-blue-900 to-purple-950 animate-gradient
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}
        bg-zinc-900
        text-blue-50 relative h-[5000px]
        pt-28 sm:pt-36`}>
        <ActiveSectionContext>
          <Header></Header>
          {children}
        </ActiveSectionContext>
      </body>
    </html>
  );
}
