import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

loadEnv({ path: ".env.local" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Migrations use the DIRECT connection (port 5432); the transaction
    // pooler doesn't support the operations Prisma Migrate performs.
    //
    // DIRECT_URL isn't defined in production because migrations aren't used
    // in production. Can't use Prisma's env() here because it throws on missing
    // values, so access directly.
    url: process.env.DIRECT_URL ?? "",
  },
});
