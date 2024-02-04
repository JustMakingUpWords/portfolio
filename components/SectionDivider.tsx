"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        delay: 2,
        duration: 10
      }}>
      <motion.div
        animate={{
          y: [-15, 15, -15]
        }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          delay: 1
        }}
        className="hidden sm:block my-[10rem] mt-[10.5rem]">
        <motion.div
          className="bg-neutral-700 h-20 w-1
        rounded-full"></motion.div>
        <motion.div
          className="bg-neutral-700 h-4 w-1 rounded-full
        rotate-[40deg] 
        absolute -translate-y-[1rem] translate-x-[0.35rem]"></motion.div>
        <motion.div
          className="bg-neutral-700 h-4 w-1 rounded-full
        -rotate-[40deg]
        absolute -translate-y-[1rem] -translate-x-[0.35rem]"></motion.div>
      </motion.div>
    </motion.div>
  );
}
