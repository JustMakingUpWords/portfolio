"use client";

import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.7
        }}
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4rem] w-full
      rounded-none border-opacity-40
      backdrop-blur-[0.5rem]
      bg-neutral-800 bg-opacity-70
      shadow-lg shadow-black/[0.4]
      sm:top-6 sm:h-[3.23rem] sm:w-[36rem] sm:rounded-full"></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2
      sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[40rem] flex-wrap
        items-center justify-center gap-y-1 translate-y-1.5
        text-[1rem] font-medium text-stone-50
        sm:w-[initial] sm:flex-nowrap sm:gap-3.5 sm:-translate-y-0.5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{
                type: "spring",
                duration: 0.6
              }}
              className="h-3/4 relative
            flex items-center justify-center">
              <Link
                onClick={() => setActiveSection(link.name)}
                className="flex w-full
              items-center justify-center
              px-3 py-3
              hover:scale-[1.2] transition"
                href={link.hash}>
                {link.name}
              </Link>
              {link.name === activeSection && (
                <motion.span
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="bg-zinc-700 rounded-full
                absolute inset-0 -z-10"></motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
