"use client";

import SectionHeading from "@/components/reuse/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 1);

  return (
    <section ref={ref} id="experience" className="scroll-m-[20rem]">
      <SectionHeading>My Experience</SectionHeading>
      <p className="text-center">EMPTY</p>
    </section>
  );
}
