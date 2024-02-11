"use client";

import SectionHeading from "@/components/SectionHeading";
import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import Project from "@/components/Project";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} className="">
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
