import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header_C/Header";
import ActiveSectionContext from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";

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
        text-blue-50 relative
        pt-28 sm:pt-36`}>
        <ActiveSectionContext>
          <Header></Header>
          <Toaster position="top-right" reverseOrder={false}></Toaster>
          {children}
        </ActiveSectionContext>
      </body>
    </html>
  );
}
