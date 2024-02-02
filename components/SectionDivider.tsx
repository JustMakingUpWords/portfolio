"use client";

import React from "react";
import { motion } from "framer-motion";
/*
initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1
      }}
*/
export default function SectionDivider() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1
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
        className="bg-neutral-700 my-32 h-20 w-1
      rounded-full
      hidden sm:block"></motion.div>
    </motion.div>
  );
}
