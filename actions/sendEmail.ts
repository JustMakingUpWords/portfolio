"use server";

import { Resend } from "resend";
import { validateForm, getErrorMessage } from "@/lib/utils";

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

  try {
    console.log("SENDING");
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "duc.vo.hm@gmail.com",
      subject: "Message from contact form",
      text: message as string,
      reply_to: senderEmail as string
    });
  } catch (error: unknown) {
    console.log("ERROR: " + error);

    return {
      error: getErrorMessage(error)
    };
  }
};
