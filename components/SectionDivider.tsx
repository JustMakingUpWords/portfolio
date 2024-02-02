"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1
      }}
      className="bg-neutral-700 my-28 h-20 w-1
    rounded-full
    hidden sm:block"></motion.div>
  );
}
