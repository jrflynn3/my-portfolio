import { readFileSync } from "node:fs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

// Run via `npm run db:seed` (i.e. `prisma db seed`), which loads .env.local
// through prisma.config.ts before invoking this script — so DATABASE_URL
// (the Supabase pooler) is present here. We construct our own client with the
// driver adapter so the seed exercises the exact runtime connection path.
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL is required to seed. Run with `npm run db:seed`.",
  );
}

// The pg driver (unlike Prisma's migrate engine) does NOT enable SSL on its
// own, but Supabase requires it — without this the server terminates the
// connection mid-handshake. connectionTimeoutMillis caps Prisma 7's otherwise
// infinite connect wait so failures surface fast instead of hanging.
const adapter = new PrismaPg({
  connectionString,
  connectionTimeoutMillis: 10_000,
  ssl: { rejectUnauthorized: false },
});

const prisma = new PrismaClient({ adapter });

// Post bodies are authored as Markdown files alongside the seed (run from the
// project root via `npm run db:seed`) and loaded into the DB content column.
const helloWorldContent = readFileSync(
  "prisma/content/hello-world.md",
  "utf-8",
);

async function main() {
  // Upserts keyed on unique slugs make this safe to run repeatedly.
  const category = await prisma.category.upsert({
    where: { slug: "engineering" },
    update: {},
    create: { name: "Engineering", slug: "engineering" },
  });

  const tags = await Promise.all(
    [
      { name: "Next.js", slug: "nextjs" },
      { name: "AWS Amplify", slug: "aws-amplify" },
    ].map((tag) =>
      prisma.tag.upsert({ where: { slug: tag.slug }, update: {}, create: tag }),
    ),
  );
  const tagConnect = tags.map((tag) => ({ id: tag.id }));

  const postData = {
    title: "Hello, World",
    excerpt:
      "Moving the site off Firebase to AWS Amplify and rebuilding on Next.js.",
    content: helloWorldContent,
    status: "PUBLISHED" as const,
  };

  await prisma.post.upsert({
    where: { slug: "hello-world" },
    // Refresh the editable fields + tags on re-seed; leave publishedAt as-is.
    update: { ...postData, tags: { set: tagConnect } },
    create: {
      ...postData,
      slug: "hello-world",
      publishedAt: new Date(),
      category: { connect: { id: category.id } },
      tags: { connect: tagConnect },
    },
  });

  console.log("✅ Seed complete: 1 category, 2 tags, 1 published post.");
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
