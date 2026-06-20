import Link from "next/link";
import { GhostButton } from "@/Components/common";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found | John Flynn",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-center px-4 pb-header">
      <h1 className="text-6xl font-bold pb-4">404</h1>
      <p className="text-xl font-thin pb-8">Page not found</p>
      <Link href="/">
        <GhostButton text="Go home" />
      </Link>
    </div>
  );
}
