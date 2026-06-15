import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | John Flynn",
  description: "Get in touch",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center pt-16 min-h-screen bg-primary px-5 md:px-10">
      <div className="w-full max-w-[650px]">
        <h1 className="text-4xl md:text-5xl font-bold pb-2">Contact Me</h1>
        <p className="text-lg md:text-xl font-thin pb-8">
          Have a question or want to work together? Send me a message.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
