"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaRegCopy } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Tooltip from "@/components/_reusable_components/Tooltip";
import toast from "react-hot-toast";

export default function Intro_Icons() {
  let delayTime = 0.4;

  return (
    <span // icons
      className="grid grid-flow-col
    place-items-center gap-1
    w-max mx-auto my-5
    scale-110">
      <Tooltip text={"Github"} transX={"-23%"}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.2 + delayTime,
            duration: 1.3
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.22 + delayTime,
            duration: 1.3
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.24 + delayTime,
            duration: 1.3
          }}>
          <a href="https://twitter.com/home" target="_blank">
            <FaTwitterSquare
              className="size-9 mr-[0.05rem]
            hover:outline outline-3 outline-offset-[0.1rem] rounded-[0.2rem]
            duration-100"></FaTwitterSquare>
          </a>
        </motion.div>
      </Tooltip>
      <Tooltip text={"duc.vo.hm@gmail.com"} transX={"-40%"} transY={-1}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.26 + delayTime,
            duration: 1.3
          }}>
          <button
            onClick={() => {
              navigator.clipboard.writeText("duc.vo.hm@gmail.com");
              toast.success("Copied", {
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff"
                }
              });
            }}
            className="size-[2rem] mr-[0.05rem]
          translate-y-1 rounded-[0.2rem]
          hover:outline outline-3 outline-offset-[0.2rem]
          duration-100">
            <ImMail className="size-[2rem] rounded-[0.2rem]"></ImMail>
          </button>
        </motion.div>
      </Tooltip>
    </span>
  );
}
