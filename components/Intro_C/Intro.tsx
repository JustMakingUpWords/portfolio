"use client";

import React from "react";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import Intro_Icons from "@/components/Intro_C/Intro_Icons";
import Tooltip from "@/components/.reusable_components/Tooltip";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] sm:mb-0
    text-center font-mono
    scroll-mt-[10rem]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1
        }}
        className="flex items-center justify-center text-6xl mt-44">
        <motion.div
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            repeat: Infinity,
            delay: 0.5,
            repeatDelay: 2
          }}>
          👋
        </motion.div>
        Hello!
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.1,
          duration: 1
        }}
        className="flex items-center justify-center text-6xl mt-3 font-mono tracking-tighter">
        I'm&nbsp;
        <span className="font-semibold font-mono">Duc Vo</span>
      </motion.div>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.2,
          duration: 1
        }}
        className="text-[1.05rem] font-medium mt-5 font-sans tracking-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla.
      </motion.p>

      <Intro_Icons></Intro_Icons>
    </section>
  );
}
