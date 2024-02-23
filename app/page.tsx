import Image from "next/image";

import About from "@/components/About_C/About";
import Contact from "@/components/Contact_C/Contact";
import Experience from "@/components/Experience_C/Experience";
import Intro from "@/components/Intro_C/Intro";
import Projects from "@/components/Project_C/Projects";
import Skills from "@/components/Skills_C/Skills";
import SectionDivider from "@/components/_reusable_components/SectionDivider";
import bg_dark from "@/public/bg_dark.jpeg";
import bg_dark2 from "@/public/bg_dark2.jpg";
import bg_dark3 from "@/public/bg_dark3.jpg";

/*
<Image
          src={bg_dark3}
          alt="background"
          width={1000}
          objectFit="cover"
          className="brightness-75"></Image>
*/

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="hidden dark:block absolute w-[100%] h-[100%] -z-10 overflow-hidden brightness-50 blur-3xl">
        <img src="bg_dark.jpg" alt="background"></img>
      </div>
      <div className="block dark:hidden absolute w-[100%] h-[100%] -z-10 overflow-hidden brightness-100 blur-3xl">
        <img src="bg_light.png" alt="background"></img>
      </div>
      <div className="mb-[12rem]"></div>
      <Intro></Intro>
      <SectionDivider>{2}</SectionDivider>
      <About></About>
      <SectionDivider>{0.5}</SectionDivider>
      <Projects></Projects>
      <SectionDivider>{0.5}</SectionDivider>
      <Skills></Skills>
      <SectionDivider>{0.5}</SectionDivider>
      <Experience></Experience>
      <SectionDivider>{0.5}</SectionDivider>
      <Contact></Contact>
      <span className="mb-[15rem]"></span>
    </main>
  );
}
