import type { Metadata } from "next";
import { sendContactEmail } from "./actions";

export const metadata: Metadata = {
  title: "Contact | John Flynn",
  description: "Get in touch",
};

export default function Contact() {
  return (
    <div>
      <div>
        <h1>Contact</h1>
        <p>Have a question or want to work together? Send me a message.</p>

        <form action={sendContactEmail}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={6} />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
