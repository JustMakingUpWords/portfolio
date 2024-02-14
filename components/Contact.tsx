"use client";

import SectionHeading from "@/components/reuse/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <section ref={ref} id="contact" className="w-[min(100%, 38rem)]">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-zinc-300">
        Please contact me directy at&nbsp;
        <a className="underline" href="mailto:duc.vo.hm@gmail.com">
          duc.vo.hm@gmail.com
        </a>
        &nbsp;or through this form.
      </p>

      <form className="mt-10">
        <input
          type="email"
          className="h-14 bg-zinc-800
        rounded-lg borderBlack"></input>
        <textarea
          className="h-52 my-3 p-4 
        borderBlack rounded-lg
        bg-zinc-800"></textarea>
        <button type="submit">
          Submit <FaPaperPlane></FaPaperPlane>
        </button>
      </form>
    </section>
  );
}
