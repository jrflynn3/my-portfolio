import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().trim().min(1, "Title is required."),
  slug: z
    .string()
    .trim()
    .regex(
      /^[a-z0-9-]+$/,
      "Slug may contain only lowercase letters, numbers, and dashes.",
    ),
  excerpt: z.string().trim().optional(),
  content: z.string().trim().min(1, "Content is required."),
  tags: z.string().optional(), // comma-separated names
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

const slugify = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const isUniqueViolation = (e: unknown) => {
  return (
    typeof e === "object" && e !== null && "code" in e && e.code === "P2002"
  );
};

export async function POST(request: Request) {
  // authenticate - allowlist ran at sign-in, so any session is the admin session
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // validate payload
  const json = await request.json().catch(() => null);
  const parsed = createPostSchema.safeParse(json);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid input.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
  const { title, slug, excerpt, content, tags, status } = parsed.data;

  const tagInputs = Array.from(
    new Map(
      (tags ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .map((name) => [slugify(name), name]),
    ),
    ([slug, name]) => ({ slug, name }),
  );

  try {
    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        status,
        publishedAt: status === "PUBLISHED" ? new Date() : null,
        tags: {
          connectOrCreate: tagInputs.map(({ slug, name }) => ({
            where: { slug },
            create: { name, slug },
          })),
        },
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (isUniqueViolation(error)) {
      console.error("Unique violation creating post: ", error);

      return NextResponse.json(
        { error: "A post with that slug already exists." },
        { status: 409 },
      );
    }
    console.error("Failed to create post: ", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
