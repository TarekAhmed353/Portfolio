"use client";

import { useState } from "react";
import { LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuSend } from "react-icons/lu";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/70 transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    data.append("subject", `New portfolio message from ${data.get("name")}`);
    data.append("from_name", "Portfolio Contact Form");

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-xl font-bold">Send me a message</h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium">Your name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            className={inputClass}
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium">Your email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="john@example.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Hi Tarek, I'd like to talk about..."
          className={`${inputClass} resize-y`}
        />
      </label>

      {/* Honeypot: bots fill this in, people never see it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <LuLoaderCircle className="size-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <LuSend className="size-5" />
            Send Message
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="flex items-start gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400">
            <LuCircleCheck className="mt-0.5 size-4 shrink-0" />
            Thanks! Your message is on its way. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-400">
            <LuCircleAlert className="mt-0.5 size-4 shrink-0" />
            <span>
              {error} You can also email me directly at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline">
                {site.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
