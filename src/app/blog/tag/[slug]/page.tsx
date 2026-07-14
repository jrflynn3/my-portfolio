import { PostCard } from "@/Components/common";
import { getPostsByTag, getTagBySlug } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

// Lets Next know to reflect the DB; don't pre-render at build.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  if (!tag) return { title: "Tag Not Found | John Flynn" };

  return {
    title: `Tagged ${tag.name} | John Flynn`,
    description: `Blog posts tagged ${tag.name}`,
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  if (!tag) notFound();

  const posts = await getPostsByTag(slug);
  return (
    <div className="min-h-screen bg-primary px-5 md:px-10 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-block text-secondary hover:underline pb-6 text-sm md:text-base font-thin"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold pb-2">
          Tagged “{tag.name}”
        </h1>
        <p className="text-lg md:text-xl font-thin pb-8">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>

        <ul className="flex flex-col gap-9">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
