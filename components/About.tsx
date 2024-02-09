"use client";

import SectionHeading from "@/components/SectionHeading";
import React, { useEffect } from "react";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function About() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="about"
      className="mt-7 max-w-[30rem]
    text-center leading-8
    font-sans tracking-tight text-[1.025rem] font-medium
    sm:max-w-[45rem]
    scroll-m-[23rem]">
      <SectionHeading>About Me</SectionHeading>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </motion.section>
  );
}
