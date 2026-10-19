"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, Send, Loader2 } from "lucide-react";

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Contact() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      form.reset();
      toast.success("Message sent. I'll get back to you soon.", { id: toastId });
    } catch (err) {
      toast.error(err.message || "Something went wrong.", { id: toastId });
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    "w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition placeholder:text-neutral-500 focus:border-black dark:border-white/20 dark:focus:border-white";

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Contact
        </p>
        <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
          Let&apos;s work together.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-neutral-500">
          Starting a new project? Need a developer for your team? I respond to
          every message within 24 hours.
        </p>

        <div className="mt-20 grid gap-16 md:grid-cols-[1fr_1.6fr]">
          {/* Left: links */}
          <div>
            <ul className="space-y-6">
              <li>
                <a
                  href="mailto:salammatthew7@gmail.com"
                  className="flex items-center gap-3 transition hover:opacity-70"
                >
                  <Mail size={18} /> Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/oluwatunmisesalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:opacity-70"
                >
                  <LinkedinIcon /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MatthewSalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:opacity-70"
                >
                  <GithubIcon /> GitHub
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-black/20 pt-6 text-sm text-neutral-500 dark:border-white/20">
              <p>· Available Worldwide</p>
              <p>Usually responds within 24 hours</p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Honeypot: hidden from humans, bots fill it */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                placeholder="your.email@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                maxLength={5000}
                placeholder="Tell me about your project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black"
              >
                {sending ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}