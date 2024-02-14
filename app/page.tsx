import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SectionDivider from "@/components/reuse/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
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
    </main>
  );
}
