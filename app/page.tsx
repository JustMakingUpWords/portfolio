import Image from "next/image";

import About from "@/components/About_C/About";
import Contact from "@/components/Contact_C/Contact";
import Experience from "@/components/Experience_C/Experience";
import Intro from "@/components/Intro_C/Intro";
import Projects from "@/components/Project_C/Projects";
import Skills from "@/components/Skills_C/Skills";
import SectionDivider from "@/components/_reusable_components/SectionDivider";
import Background from "@/components/Background_C/Background";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Background></Background>
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
