"use client";

import { useActionState } from "react";
import { sendContactEmail } from "./actions";
import { initialContactState } from "./contact-state";
import { GhostButton } from "@/Components/common";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialContactState,
  );

  const {
    name: nameError,
    email: emailError,
    message: messageError,
  } = state.fieldErrors ?? {};
  const labelClass = "font-medium text-sm md:text-base";
  const fieldClass =
    "rounded-md border border-secondary/35 focus:border-secondary bg-white/60 px-3 py-2 text-sm md:text-base focus:outline-none transition-colors aria-invalid:border-quaternary aria-invalid:focus:border-quaternary";

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5"
      // validation handled on submission
      noValidate
    >
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
          defaultValue={state.values?.name ?? ""}
          aria-invalid={!!nameError}
          aria-describedby={nameError ? "name-error" : undefined}
        />
        {nameError && (
          <p id="name-error" className="text-quaternary text-sm">
            {nameError}
          </p>
        )}
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
          defaultValue={state.values?.email ?? ""}
          aria-invalid={!!emailError}
          aria-describedby={emailError ? "email-error" : undefined}
        />
        {emailError && (
          <p id="email-error" className="text-quaternary text-sm">
            {emailError}
          </p>
        )}
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
          defaultValue={state.values?.message ?? ""}
          aria-invalid={!!messageError}
          aria-describedby={messageError ? "message-error" : undefined}
        />
        {messageError && (
          <p id="message-error" className="text-quaternary text-sm">
            {messageError}
          </p>
        )}
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
