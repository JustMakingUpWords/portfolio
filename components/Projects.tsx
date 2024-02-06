import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "@/components/Project";

export default function Projects() {
  return (
    <section className="">
      <SectionHeading>My Projects</SectionHeading>
      <p className="absolute -translate-y-[10rem]">
        FOR PROJECTS DO A PIE CHART REPRESENTING HOW MUCH OF A LANGUANGE IS USED IN THE CODE
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project}></Project>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
