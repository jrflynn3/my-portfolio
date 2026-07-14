import { prisma } from "@/lib/prisma";
import { cache } from "react";

export type PostListItem = Awaited<
  ReturnType<typeof getPublishedPosts>
>[number];

// Centralizing the post queries here keeps the page components declarative and
// gives later slices (tag filtering, admin) a single place to reuse.

export async function getPublishedPosts() {
  return prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    include: { category: true, tags: true },
  });
}

// wrapped with cache to dedupe multiple calls within the same render cycle
export const getPostBySlug = cache(async (slug: string) => {
  return prisma.post.findFirst({
    where: { slug, status: "PUBLISHED" },
    include: { category: true, tags: true },
  });
});

export async function getPostsByTag(tagSlug: string) {
  return prisma.post.findMany({
    where: { status: "PUBLISHED", tags: { some: { slug: tagSlug } } },
    orderBy: { publishedAt: "desc" },
    include: { category: true, tags: true },
  });
}

export const getTagBySlug = cache(async (tagSlug: string) => {
  return prisma.tag.findUnique({ where: { slug: tagSlug } });
});
