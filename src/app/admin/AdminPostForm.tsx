"use client";

import { GhostButton } from "@/Components/common";
import { useState } from "react";

export function AdminPostForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setMessage("");

    const payload = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      // handle valid error responses (404, 400, etc.)
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(body.error ?? "Something went wrong creating the post.");
        return;
      }

      setStatus("success");
      setMessage("Post created.");
      form.reset();
    } catch {
      // fetch failed - no response reached us (offline/server down)
      setStatus("error");
      setMessage(
        "Couldn't reach the server. Check your connection and try again.",
      );
    }
  };

  const fieldClass =
    "rounded-md border border-secondary/35 focus:border-secondary bg-white/60 px-3 py-2 text-sm md:text-base focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full pt-4">
      <input name="title" placeholder="Title" required className={fieldClass} />
      <input
        name="slug"
        placeholder="Slug (e.g. my-new-post)"
        required
        className={fieldClass}
      />
      <input
        name="excerpt"
        placeholder="Excerpt (optional)"
        className={fieldClass}
      />
      <textarea
        name="content"
        placeholder="Content (Markdown)"
        required
        rows={12}
        className={`${fieldClass} resize-y`}
      />
      <input
        name="category"
        placeholder="Category (optional)"
        className={fieldClass}
      />
      <input
        name="tags"
        placeholder="Tags, comma-separated (e.g. Next.js, Prisma)"
        className={fieldClass}
      />
      <select name="status" defaultValue="DRAFT" className={fieldClass}>
        <option value="DRAFT">Draft</option>
        <option value="PUBLISHED">Published</option>
      </select>

      <button
        type="submit"
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status === "submitting"}
      >
        <GhostButton
          text={status === "submitting" ? "Creating" : "Create post"}
        />
      </button>

      {status !== "idle" && status !== "submitting" && (
        <p
          className={`text-sm ${status === "success" ? "text-secondary" : "text-quaternary"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
