import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";
import { env } from "@/env";

// The connection string is the Supabase transaction pooler (port 6543).
// pg doesn't enable SSL on its own, but Supabase requires it
const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// In dev, Next.js hot-reload re-evaluates modules on every change. Without a
// guard, each reload would construct a new PrismaClient (and its own pool),
// quickly exhausting database connections. Cache a single instance on
// globalThis so reloads reuse it. In production each instance is fresh.
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
