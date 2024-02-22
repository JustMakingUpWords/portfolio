"use client";

import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

type Theme = "light" | "dark" | "system";

export default function Theme_Switch_Button() {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center
    fixed top-8 right-8 rounded-full
    scale-[1.8] w-[1.7rem] h-[1.7rem]
    bg-neutral-800 bg-opacity-70 backdrop-blur-[0.5rem]
    border border-neutral-900 border-opacity-40
    shadow-xl shadow-black/[0.4]
    hover:scale-[1.9] active:scale-[1.7]
    transition-all">
      {theme === "light" ? <BsSun></BsSun> : <BsMoon className="scale-[0.85]"></BsMoon>}
    </button>
  );
}
