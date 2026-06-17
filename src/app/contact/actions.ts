"use server";

import { Resend } from "resend";
import type { ContactFormState } from "./contact-state";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    // minor anti-spam bot prevention
    .min(10, "Message is too short.")
    .max(2000, "Message is too long."),
});

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawFormData = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  };

  const parsed = contactSchema.safeParse(rawFormData);
  if (!parsed.success) {
    const errors = z.treeifyError(parsed.error);
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors: {
        name: errors.properties?.["name"]?.errors[0],
        email: errors.properties?.["email"]?.errors[0],
        message: errors.properties?.["message"]?.errors[0],
      },
      values: rawFormData,
    };
  }

  const { name, email, message } = parsed.data;

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
      values: rawFormData,
    };
  }

  return {
    status: "success",
    message: "Thanks — your message has been sent.",
  };
}
