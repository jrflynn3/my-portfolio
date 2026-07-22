import { Markdown, TagLink } from "@/Components/common";
import { getPostBySlug } from "@/lib/posts";
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
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Post not found | John Flynn" };

  return {
    title: `${post.title} | John Flynn`,
    description: post.excerpt ?? undefined,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-primary px-5 md:px-10 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-block text-secondary hover:underline pb-6 text-sm md:text-base font-thin"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold pb-2">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-x-3 pb-4 text-sm font-thin text-tertiary">
          {post.publishedAt && (
            <span>
              {post.publishedAt.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          {post.category && <span>· {post.category.name}</span>}
        </div>

        <div className="flex flex-wrap gap-2 pb-6">
          {post.tags.map((tag) => (
            <TagLink key={tag.id} name={tag.name} slug={tag.slug} />
          ))}
        </div>

        <Markdown content={post.content} />
      </div>
    </div>
  );
}
