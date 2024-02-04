import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SectionDivider>{2}</SectionDivider>
      <About></About>
      <SectionDivider>{0}</SectionDivider>
    </main>
  );
}
