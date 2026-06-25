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
    // Supabase transaction-pooler URL — used by the runtime Prisma adapter.
    // DIRECT_URL is intentionally NOT here: it's only used by `prisma migrate`
    // via prisma.config.ts, never at app runtime.
    DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.url("NEXT_PUBLIC_SITE_URL must be a valid URL"),
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_CONTACT_EMAIL: process.env.RESEND_CONTACT_EMAIL,
    RESEND_EMAIL: process.env.RESEND_EMAIL,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
