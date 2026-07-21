// Amplify only exposes console env vars at *build* time, not to the SSR runtime,
// so we copy the runtime-needed vars into .env.production during the build.
//
// - Non-secrets arrive as ordinary environment variables (process.env.X).
// - Secrets live in SSM Parameter Store and arrive as a single JSON blob in
//   process.env.secrets.
//
// Runs only in the Amplify build (see amplify.yml); never locally.
import { appendFileSync } from "node:fs";

const secrets = JSON.parse(process.env.secrets || "{}");

// Non-secret runtime vars (plain Amplify env vars).
const NON_SECRET = [
  "RESEND_EMAIL",
  "RESEND_CONTACT_EMAIL",
  "AUTH_GITHUB_ID",
  "AUTH_URL",
  "SUPABASE_CA_CERT_B64",
];

// Secrets (SSM Parameter Store SecureString → process.env.secrets JSON).
const SECRET = [
  "DATABASE_URL",
  "RESEND_API_KEY",
  "AUTH_SECRET",
  "AUTH_GITHUB_SECRET",
];

const lines = [];
for (const key of NON_SECRET) {
  if (process.env[key]) lines.push(`${key}=${process.env[key]}`);
}
for (const key of SECRET) {
  if (secrets[key]) lines.push(`${key}=${secrets[key]}`);
}

appendFileSync(".env.production", lines.join("\n") + "\n");
console.log(`[env] wrote ${lines.length} vars to .env.production`);
