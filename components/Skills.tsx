"use client";

import SectionHeading from "@/components/reuse/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      id="skills"
      className="max-w-[53rem]
    scroll-mt-[20rem] text-center">
      <SectionHeading>My Skills</SectionHeading>
      <ul
        className="flex flex-wrap justify-center
      gap-1 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            custom={index}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="bg-zinc-800 text-zinc-300 px-4 py-2
          border border-black/[0.1] rounded-xl
          text-[1rem]">
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
