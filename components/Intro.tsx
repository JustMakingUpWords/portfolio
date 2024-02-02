"use client";

import { motion } from "framer-motion";
import React from "react";

// icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 font-mono">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 1
        }}
        className="flex items-center justify-center text-6xl mt-44">
        Hello!
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            delay: 0.1,
            damping: 10,
            duration: 1
          }}
          className="relative">
          👋
        </motion.div>
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
        <span className="font-semibold font-mono">Duc Vo</span>!
      </motion.div>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.2,
          duration: 1
        }}
        className="text-1xl font-medium mt-5 font-sans tracking-tight">
        SAMP TEXT: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </motion.p>
      <div
        className="grid grid-flow-col
      place-items-center gap-1
      w-max mx-auto my-5
      scale-110">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.2,
            duration: 0.7
          }}>
          <a href="https://github.com/JustMakingUpWords" target="_blank">
            <FaGithubSquare
              className="size-9 
          hover:outline hover:mx-1 outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
          duration-100 "></FaGithubSquare>
          </a>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.22,
            duration: 0.7
          }}>
          <a href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin
              className="size-9 
          hover:outline hover:mx-1 outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
          duration-100 "></FaLinkedin>
          </a>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.24,
            duration: 0.7
          }}>
          <a href="https://twitter.com/home" target="_blank">
            <FaTwitterSquare
              className="size-9 
          hover:outline hover:mx-1 outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
          duration-100 "></FaTwitterSquare>
          </a>
        </motion.div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.26,
            duration: 0.7
          }}>
          <a href="https://twitter.com/home" target="_blank">
            <ImMail
              className="size-8
          hover:outline hover:mx-1 outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
          duration-100 "></ImMail>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
