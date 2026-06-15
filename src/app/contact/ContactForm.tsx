"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactEmail } from "./actions";
import { initialContactState } from "./contact-state";
import { GhostButton } from "@/Components/common";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Clear the fields once a message sends successfully.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const labelClass = "font-medium text-sm md:text-base";
  const fieldClass =
    "rounded-md border border-secondary/35 bg-white/60 px-3 py-2 text-sm md:text-base focus:outline-none focus:border-secondary transition-colors";

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="self-start rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GhostButton text={isPending ? "Sending…" : "Send Message"} />
      </button>

      <p
        aria-live="polite"
        className={`min-h-5 text-sm md:text-base ${
          state.status === "success"
            ? "text-secondary font-medium"
            : state.status === "error"
              ? "text-quaternary font-medium"
              : ""
        }`}
      >
        {state.status !== "idle" ? state.message : ""}
      </p>
    </form>
  );
}
