"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4rem] w-full
      rounded-none border-opacity-40
      backdrop-blur-[0.5rem]
      bg-gradient-to-r from-purple-800/75 to-purple-700/75
      shadow-lg shadow-black/[0.4]
      sm:top-6 sm:h-[3.23rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>

      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2
      sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[40rem] flex-wrap
        items-center justify-center gap-y-1 translate-y-1.5
        text-[1rem] font-medium text-stone-100
        sm:w-[initial] sm:flex-nowrap sm:gap-3.5 sm:-translate-y-0.5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              className="h-3/4
            flex items-center justify-center">
              <Link
                className="flex w-full items-center justify-center px-3 py-3 
              hover:scale-[1.2] transition"
                href={link.hash}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
