"use client";

import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";

type Theme = "light" | "dark" | "system";

export default function Theme_Switch_Button() {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.section
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.7
      }}
      className="flex
    items-center justify-center
    fixed w-[3.1rem] h-[3.1rem]
    rounded-full top-7 left-7
    bg-neutral-800 bg-opacity-70 backdrop-blur-[0.5rem]
    border border-neutral-900 border-opacity-40
    shadow-xl shadow-black/[0.4]">
      <button
        onClick={toggleTheme}
        className="scale-[1.8]
      hover:scale-[2] active:scale-[1.7]
      transition-all">
        {theme === "light" ? <BsSun></BsSun> : <BsMoon className="scale-[0.85]"></BsMoon>}
      </button>
    </motion.section>
  );
}
