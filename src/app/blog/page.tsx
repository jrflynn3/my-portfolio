import { getPublishedPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | John Flynn",
  description: "My thoughts on building an upgrading this site.",
};

// Lets Next know to reflect the DB; don't pre-render at build.
export const dynamic = "force-dynamic";

const Chip = ({ text }: { text: string }) => {
  return (
    <span className="border border-gray-400 rounded-full px-3 py-1 text-sm font-thin whitespace-nowrap">
      {text}
    </span>
  );
};

export default async function Blog() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-primary px-5 md:px-10 py-12">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-xl font-thin pb-8">Blog</h1>
        <p className="text-lg md:text-xl font-thin pb-8">
          My thoughts on building an upgrading this site.
        </p>
        {posts.length === 0 ? (
          <p className="font-thin">No posts yet - check back soon.</p>
        ) : (
          <ul className="flex flex-col gap-9">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-xl shadow-lg/20 hover:shadow-xl/40 transition-all delay-100 p-5"
                >
                  <h2 className="font-bold text-xl md:text-2xl">
                    {post.title}
                  </h2>
                  {post.publishedAt && (
                    <p className="text-sm font-thin text-tertiary/70 pt-1">
                      {post.publishedAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                  {post.excerpt && (
                    <p className="font-thin pt-3">{post.excerpt}</p>
                  )}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {post.tags.map((tag) => (
                      <Chip key={tag.id} text={tag.name} />
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
