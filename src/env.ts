import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  // vars only accessibly by server
  server: {
    RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
    RESEND_CONTACT_EMAIL: z.email(
      "RESEND_CONTACT_EMAIL must be a valid email.",
    ),
    RESEND_EMAIL: z.email("RESEND_EMAIL must be a valid email."),
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_CONTACT_EMAIL: process.env.RESEND_CONTACT_EMAIL,
    RESEND_EMAIL: process.env.RESEND_EMAIL,
  },
});
