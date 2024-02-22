"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaRegCopy } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Tooltip from "@/components/_reusable_components/Tooltip";

const tFunc = () => {
  console.log("HI");
};

export default function Intro_Icons() {
  return (
    <span // icons
      className="grid grid-flow-col
    place-items-center gap-1
    w-max mx-auto my-5
    scale-110">
      <Tooltip text={"Github"} transX={"-23%"}>
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
            hover:outline outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
            duration-100"></FaGithubSquare>
          </a>
        </motion.div>
      </Tooltip>
      <Tooltip text={"LinkedIn"} transX={"-29%"}>
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
            hover:outline outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
            duration-100"></FaLinkedin>
          </a>
        </motion.div>
      </Tooltip>
      <Tooltip text={"Twitter"} transX={"-25%"}>
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
              className="size-9 mr-[0.05rem]
            hover:outline outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
            duration-100"></FaTwitterSquare>
          </a>
        </motion.div>
      </Tooltip>
      <motion.div // email
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.26,
          duration: 0.7
        }}
        className="group">
        <ImMail className="size-[1.92rem] rounded-[0.2rem]"></ImMail>
        <div
          className="absolute group
        -translate-y-[1.95rem] translate-x-[0.01rem]
        block size-[1.96rem]
      bg-slate-100 rounded-[0.2rem] bg-opacity-0
      text-black text-opacity-0 font-sans tracking-tight font-semibold
        group-hover:outline outline-white outline-offset-[0.2rem]
        group-hover:w-[11.7rem] group-hover:text-opacity-100 group-hover:bg-opacity-100
        duration-200">
          <span // words
            className="absolute
          translate-y-[0.19rem] translate-x-[0.3rem]
          hidden group-hover:block">
            duc.vo.hm@gmail.com
            <button
              onClick={() => {
                navigator.clipboard.writeText("duc.vo.hm@gmail.com");
              }}
              id="change"
              className="absolute block rounded-sm
            -translate-y-[1.2rem] translate-x-[10.1rem]
            scale-[1.05] active:scale-[0.93]">
              <FaRegCopy></FaRegCopy>
            </button>
          </span>
        </div>
      </motion.div>
    </span>
  );
}
