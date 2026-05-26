"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  await resend.emails.send({
    from: process.env.RESEND_CONTACT_EMAIL!,
    to: process.env.RESEND_EMAIL!,
    subject: `Portfolio contact form: ${name}`,
    replyTo: `${email}`,
    text: `From ${name} <${email}>\n\n${message}`,
  });
}
