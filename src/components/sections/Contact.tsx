"use client";

import { useState, type FormEvent } from "react";
import Reveal from "../Reveal";
import { brand } from "@/lib/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState(`mailto:${brand.email}`);

  // No backend wired yet: rather than fake a "message received" state,
  // we compose a real mailto: from the form fields and hand off to the
  // visitor's own mail client. That's a send path that actually works
  // today; an in-app inbox can replace it once one exists.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const org = String(data.get("org") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `MJ Adom enquiry${interest ? ` — ${interest}` : ""}${
      name ? ` from ${name}` : ""
    }`;
    const detailLines = [
      name && `Name: ${name}`,
      org && `Organisation: ${org}`,
      email && `Reply-to: ${email}`,
      interest && `Reaching out as: ${interest}`,
    ].filter((line) => line.length > 0);
    const body = [...detailLines, "", message].join("\n");

    const href = `mailto:${brand.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setMailtoHref(href);
    setSubmitted(true);
    window.location.href = href;
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-forest-deep py-24 text-cream md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 0%, rgba(46,125,70,0.4), transparent 60%)",
        }}
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.4vw,3rem)] text-cream">
            Let&rsquo;s build a legacy of{" "}
            <span className="gold-text">excellence</span> together
          </h2>
          <p className="mt-5 max-w-[46ch] text-lg text-cream/75">
            Whether you&rsquo;re an investor, a buyer, an exporter, or a farmer —
            we&rsquo;d love to hear from you. Reach out and let&rsquo;s grow
            together.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <ContactIcon type="mail" />
              <a href={`mailto:${brand.email}`} className="text-cream/85 hover:text-gold-light">
                {brand.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <ContactIcon type="phone" />
              <span className="text-cream/85">{brand.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <ContactIcon type="pin" />
              <span className="text-cream/85">{brand.location}</span>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[var(--radius-brand)] border border-gold-light/15 bg-white/[0.04] p-7 md:p-9">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gold-light/20 text-gold-light">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-xl text-cream">Almost there</h3>
                <p className="mt-2 max-w-[34ch] text-sm text-cream/70">
                  Your mail app should have opened with your message ready to
                  send. If it didn&rsquo;t,{" "}
                  <a href={mailtoHref} className="text-gold-light underline">
                    send it directly
                  </a>{" "}
                  or email us at{" "}
                  <a href={`mailto:${brand.email}`} className="text-gold-light underline">
                    {brand.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Ama Mensah" autoComplete="name" />
                  <Field label="Organisation" name="org" placeholder="Optional" required={false} autoComplete="organization" />
                </div>
                <Field label="Email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-cream/80">
                    I&rsquo;m reaching out as
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full rounded-lg border border-gold-light/20 bg-forest-deep/60 px-4 py-3 text-sm text-cream outline-none focus:border-gold-light"
                    defaultValue="Investor"
                  >
                    <option>Investor</option>
                    <option>Buyer / Exporter</option>
                    <option>Farmer / Supplier</option>
                    <option>Partner</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-cream/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us how you'd like to work together…"
                    className="w-full resize-none rounded-lg border border-gold-light/20 bg-forest-deep/60 px-4 py-3 text-sm text-cream placeholder:text-cream/60 outline-none focus:border-gold-light"
                  />
                </div>
                <button type="submit" className="btn btn-gold w-full">
                  Send Message
                </button>
                <p className="text-center text-xs text-cream/60">
                  Opens in your mail app, addressed to {brand.email}.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-cream/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gold-light/20 bg-forest-deep/60 px-4 py-3 text-sm text-cream placeholder:text-cream/60 outline-none focus:border-gold-light"
      />
    </div>
  );
}

function ContactIcon({ type }: { type: "mail" | "phone" | "pin" }) {
  return (
    <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-gold-light/25 text-gold-light">
      {type === "mail" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )}
      {type === "phone" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 4h3l1.5 4.5-2 1.5a11 11 0 005 5l1.5-2 4.5 1.5V22a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )}
      {type === "pin" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 21c4-4 7-7.5 7-11a7 7 0 10-14 0c0 3.5 3 7 7 11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )}
    </span>
  );
}
