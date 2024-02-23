import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header_C/Header";
import ActiveSectionContext from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Theme_Switch_Button from "@/components/Buttons_C/Theme_Switch_Button";
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
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={`${inter.className}
        bg-zinc-100 dark:bg-zinc-800
        text-slate-950 dark:text-blue-50
        relative`}>
        <ActiveSectionContext>
          <Theme_Switch_Button></Theme_Switch_Button>
          <Toaster position="top-right" reverseOrder={false}></Toaster>
          {children}
        </ActiveSectionContext>
      </body>
    </html>
  );
}
