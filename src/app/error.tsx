"use client";

import { GhostButton } from "@/Components/common";
import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // console for now until better error logging implemented
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-center px-4 pb-header">
      <h1 className="text-3xl font-bold pb-4">Something went wrong</h1>
      <p className="text-xl font-thin pb-8">An unexpected error occurred</p>
      <div className="flex gap-3">
        <button onClick={reset} className="cursor-pointer">
          <GhostButton text="Try again" />
        </button>
        <Link href="/">
          <GhostButton text="Go home" />
        </Link>
      </div>
    </div>
  );
}
