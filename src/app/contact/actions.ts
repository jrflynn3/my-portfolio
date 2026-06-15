"use server";

import { Resend } from "resend";
import type { ContactFormState } from "./contact-state";

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_CONTACT_EMAIL!,
      to: process.env.RESEND_EMAIL!,
      subject: `Portfolio contact form: ${name}`,
      replyTo: `${email}`,
      text: `From ${name} <${email}>\n\n${message}`,
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Thanks — your message has been sent.",
  };
}
