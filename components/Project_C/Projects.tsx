"use client";

import SectionHeading from "@/components/_reusable_components/SectionHeading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "@/components/Project_C/Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} className="">
      <SectionHeading>My Projects</SectionHeading>
      <p className="absolute -translate-y-[10rem]">
        FOR PROJECTS DO A PIE CHART REPRESENTING HOW MUCH OF A LANGUANGE IS USED IN THE CODE PUT
        <br></br>
        SKILLS ABOVE PROJECTS CUZ IT MAKES MORE SENSE FOR SKILLS DO A BAR CHART THING THAT SHOWS
        <br></br>
        HOW MUCH OF A LANGUAGE IS USED THROUGHOUT ALL PROGRAMS
        <br></br>
        ALSO MAKE THEME SWITCH BUtTON MORE INTERESTING, LIKE A POPUP OR SOMETHING
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
