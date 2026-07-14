import Link from "next/link";

export function TagLink({ name, slug }: { name: string; slug: string }) {
  return (
    <Link
      href={`/blog/tag/${slug}`}
      className="border border-gray-400 rounded-full px-3 py-1 text-sm font-thin whitespace-nowrap hover:bg-secondary hover:text-white transition-colors"
    >
      {name}
    </Link>
  );
}
