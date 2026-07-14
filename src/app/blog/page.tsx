import { PostCard } from "@/Components/common";
import { getPublishedPosts } from "@/lib/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | John Flynn",
  description: "My thoughts on building an upgrading this site.",
};

// Lets Next know to reflect the DB; don't pre-render at build.
export const dynamic = "force-dynamic";

export default async function Blog() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-primary px-5 md:px-10 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold pb-2">Blog</h1>
        <p className="text-lg md:text-xl font-thin pb-8">
          My thoughts on building an upgrading this site.
        </p>
        {posts.length === 0 ? (
          <p className="font-thin">No posts yet - check back soon.</p>
        ) : (
          <ul className="flex flex-col gap-9">
            {posts.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
