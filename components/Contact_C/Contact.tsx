"use client";

import SectionHeading from "@/components/.reusable_components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import Submit_Button from "@/components/Contact_C/Submit_Button";

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

      <form
        action={async (formData) => {
          console.log("Running on client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));

          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col">
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required={true}
          maxLength={100}
          className="h-14 px-4 bg-zinc-800
        rounded-lg border border-gray-400/10"></input>
        <textarea
          name="message"
          placeholder="Your message"
          required={true}
          maxLength={5000}
          className="h-52 my-3 p-4 
        border border-gray-400/10 rounded-lg
        bg-zinc-800"></textarea>
        <Submit_Button></Submit_Button>
      </form>
    </motion.section>
  );
}
