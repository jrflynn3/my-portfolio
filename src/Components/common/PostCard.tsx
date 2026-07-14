import { PostListItem } from "@/lib/posts";
import Link from "next/link";
import { TagLink } from "./TagLink";

type PostCardProps = { post: PostListItem };

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-lg/20 hover:shadow-xl/40 transition-all delay-100 p-5">
      <h2 className="font-bold text-xl md:text-2xl">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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

      {post.excerpt && <p className="font-thin pt-3">{post.excerpt}</p>}

      <div className="flex flex-wrap gap-2 pt-4">
        {post.tags.map((tag) => (
          <TagLink key={tag.id} name={tag.name} slug={tag.slug} />
        ))}
      </div>
    </article>
  );
}
