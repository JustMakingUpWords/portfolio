"use client";

import SectionHeading from "@/components/reuse/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-[min(100%, 38rem)]
    text-center">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-zinc-300 -mt-3">
        Please contact me directy at&nbsp;
        <a className="underline" href="mailto:duc.vo.hm@gmail.com">
          duc.vo.hm@gmail.com
        </a>
        &nbsp;or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 bg-zinc-800
        rounded-lg border border-gray-400/10"></input>
        <textarea
          placeholder="Your message"
          className="h-52 my-3 p-4 
        border border-gray-400/10 rounded-lg
        bg-zinc-800"></textarea>
        <button
          type="submit"
          className=" group flex items-center justify-center 
        h-[2.5rem] w-[6rem] rounded-full
        bg-zinc-800 text-zinc-300
        outline-none transition-all
        hover:scale-105
        hover:bg-zinc-700">
          Submit&nbsp;
          <FaPaperPlane className="text-xs opacity-70 transition-all"></FaPaperPlane>
        </button>
      </form>
    </motion.section>
  );
}
