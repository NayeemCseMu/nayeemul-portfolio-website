"use client";

import { useRef, useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function handleFormMouseMove(e: React.MouseEvent<HTMLFormElement>) {
    const el = formRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="container-page py-20 sm:py-28 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading eyebrow="Contact" title="Let's connect." />
          </Reveal>
          <Reveal delayMs={80}>
            <p className="mt-5 text-muted leading-relaxed max-w-md">
              I&apos;m interested in opportunities where software engineering, data,
              and cloud technologies come together.
            </p>
          </Reveal>
          <Reveal delayMs={140}>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 border border-border">
                  <Mail size={16} aria-hidden />
                </span>
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 border border-border">
                  <LinkedinIcon size={16} />
                </span>
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 border border-border">
                  <GithubIcon size={16} />
                </span>
                GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delayMs={100}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onMouseMove={handleFormMouseMove}
              className="card card-spotlight relative overflow-hidden p-6 sm:p-8"
            >
              <span className="card-spotlight-glow" aria-hidden />
              <div className="relative z-[1] space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-2 focus:border-accent outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-muted mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-2 focus:border-accent outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-2 focus:border-accent outline-none resize-none"
                    placeholder="Tell me a bit about the role or opportunity."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Send message
                  <Send size={15} aria-hidden />
                </button>
                <p className="text-xs text-muted-2">
                  Opens your email client with this message pre-filled — sent directly to{" "}
                  {site.email}, no data stored on this site.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
