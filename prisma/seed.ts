import { readFileSync } from "node:fs";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL is required to seed. Run with `npm run db:seed`.",
  );
}

const adapter = new PrismaPg({
  connectionString,
  connectionTimeoutMillis: 10_000,
  ssl: { rejectUnauthorized: false },
});
const prisma = new PrismaClient({ adapter });

const readPost = (file: string) =>
  readFileSync(`prisma/content/${file}`, "utf-8");

// Every tag used across posts (upserted once, referenced by slug below).
const tags = [
  { name: "Next.js", slug: "nextjs" },
  { name: "AWS Amplify", slug: "aws-amplify" },
  { name: "Prisma", slug: "prisma" },
  { name: "Supabase", slug: "supabase" },
  { name: "Postgres", slug: "postgres" },
  { name: "Serverless", slug: "serverless" },
];

const posts = [
  {
    slug: "hello-world",
    title: "Hello, World",
    excerpt:
      "Moving the site off Firebase to AWS Amplify and rebuilding on Next.js.",
    file: "hello-world.md",
    publishedAt: new Date("2026-06-20T12:00:00"),
    tagSlugs: ["nextjs", "aws-amplify"],
  },
  {
    slug: "adding-a-database",
    title: "Giving the Site a Database",
    excerpt:
      "Adding a Postgres database with Supabase and Prisma — and why a blog needs one.",
    file: "adding-a-database.md",
    publishedAt: new Date("2026-06-25T12:00:00"),
    tagSlugs: ["prisma", "supabase"],
  },
  {
    slug: "connection-pooling",
    title: "Why My Database Needs a Bouncer",
    excerpt:
      "Serverless + Postgres needs a connection pooler — here's why, and the two-string setup it takes.",
    file: "connection-pooling.md",
    publishedAt: new Date("2026-06-29T12:00:00"),
    tagSlugs: ["postgres", "serverless"],
  },
  {
    slug: "tag-filtering",
    title: "Querying Across a Relationship",
    excerpt:
      "Filtering the blog by tag — my first query that reaches across a many-to-many relationship.",
    file: "tag-filtering.md",
    publishedAt: new Date("2026-07-10T12:00:00"),
    tagSlugs: ["prisma", "postgres"],
  },
];

async function main() {
  const category = await prisma.category.upsert({
    where: { slug: "engineering" },
    update: {},
    create: { name: "Engineering", slug: "engineering" },
  });

  // Upsert all tags, remembering each slug's generated id.
  const tagIdBySlug = new Map<string, string>();
  for (const tag of tags) {
    const row = await prisma.tag.upsert({
      where: { slug: tag.slug },
      update: {},
      create: tag,
    });
    tagIdBySlug.set(tag.slug, row.id);
  }

  for (const post of posts) {
    const tagConnect = post.tagSlugs.map((slug) => ({
      id: tagIdBySlug.get(slug)!,
    }));
    const data = {
      title: post.title,
      excerpt: post.excerpt,
      content: readPost(post.file),
      status: "PUBLISHED" as const,
      publishedAt: post.publishedAt,
    };
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: { ...data, tags: { set: tagConnect } },
      create: {
        ...data,
        slug: post.slug,
        category: { connect: { id: category.id } },
        tags: { connect: tagConnect },
      },
    });
  }

  console.log(
    `✅ Seed complete: 1 category, ${tags.length} tags, ${posts.length} published posts.`,
  );
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
