import { prisma } from "@/lib/prisma";

// Centralizing the post queries here keeps the page components declarative and
// gives later slices (tag filtering, admin) a single place to reuse.

export async function getPublishedPosts() {
  return prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    include: { category: true, tags: true },
  });
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findFirst({
    where: { slug, status: "PUBLISHED" },
    include: { category: true, tags: true },
  });
}
