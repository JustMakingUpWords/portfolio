"use server";

import React from "react";
import { Resend } from "resend";
import { validateForm, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact_form_email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log("sender email: " + senderEmail);
  console.log("sender message: " + message);

  // server side validation
  if (!validateForm(senderEmail, 100)) {
    console.log("Invalid sender email");
    return {
      error: "Invalid sender email"
    };
  }
  if (!validateForm(message, 5000)) {
    console.log("Invalid message");
    return {
      error: "Invalid message"
    };
  }

  let data;
  try {
    console.log("SENDING");
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.cev>",
      to: "duc.vo.hm@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      })
    });
    if ("error" in data && data.error !== null) {
      console.log(data);
      throw data.error;
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    };
  }

  return {
    data
  };
};
