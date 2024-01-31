"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 font-mono">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center text-6xl mt-36">
        Hello!👋
      </motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.1,
          duration: 0.5
        }}
        className="flex items-center justify-center text-6xl mt-3 font-mono tracking-tighter">
        I'm&nbsp;
        <span className="font-semibold font-mono">Duc Vo</span>!
      </motion.div>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.2,
          duration: 0.5
        }}
        className="text-1xl font-medium mt-5 font-sans tracking-tight">
        SAMP TEXT: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </motion.p>
    </section>
  );
}
