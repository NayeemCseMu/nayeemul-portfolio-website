"use client";

import Image from "next/image";
import Link from "next/link";
import { type MouseEvent, useRef } from "react";
import {
  ArrowRight,
  Briefcase,
  CloudCog,
  Database,
  FileDown,
  GraduationCap,
  Mail,
  Phone,
} from "lucide-react";
import { site } from "@/data/site";
import HeroPipeline from "./HeroPipeline";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const facts = [
  { icon: Briefcase, value: "4+ Years", label: "Software Engineering Experience" },
  { icon: GraduationCap, value: "M.Sc", label: "Computational Science" },
  { icon: Database, value: "Python + SQL", label: "Analytics Foundation" },
  { icon: CloudCog, value: "Cloud", label: "Current Focus" },
];

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - py) * 3.5}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 3.5}deg`);
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <section className="container-page pt-14 sm:pt-20 pb-16 sm:pb-24">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="profile-card relative overflow-hidden rounded-[1.75rem] border border-border bg-surface px-5 py-8 sm:px-7 sm:py-12"
      >
        <span className="profile-card-glow" aria-hidden />
        <span className="profile-card-sheen" aria-hidden />

        <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div
              className="reveal-item inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
              </span>
              {site.availability}
            </div>

            <h1
              className="reveal-item mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-foreground text-balance leading-[1.08]"
              style={{ animationDelay: "70ms" }}
            >
              {site.name}
            </h1>

            <p
              className="reveal-item mt-4 text-xl sm:text-2xl text-foreground/90 font-medium text-balance"
              style={{ animationDelay: "140ms" }}
            >
              Software Engineer building toward Data Analytics &amp; Cloud
              Computing
            </p>

            <p
              className="reveal-item mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              I bring 3+ years of software engineering experience and a background
              in computational science to build data-driven, analytical, and
              cloud-focused solutions.
            </p>

            <div
              className="reveal-item mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "260ms" }}
            >
              <Link
                href="/projects"
                className="cta-primary inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <FileDown size={16} aria-hidden />
                Download Resume
              </Link>
            </div>

            <div
              className="reveal-item mt-8 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <GithubIcon size={17} />
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <LinkedinIcon size={17} />
                LinkedIn
              </a>
              <a
                href={`mailto:${site.email}`}
                className="social-link inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Mail size={17} aria-hidden />
                Email
              </a>
              <a
                href={`phone:${site.phone}`}
                className="social-link inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <Phone size={17} aria-hidden />
                +1 (249) 979-4922
              </a>
            </div>
          </div>

          <div
            className="reveal-item lg:col-span-5 flex flex-col items-center gap-6"
            style={{ animationDelay: "180ms" }}
          >
            <div className="relative h-40 w-40 shrink-0">
              <div className="avatar-ring-spin absolute inset-0 rounded-full" />
              <div className="absolute inset-[3px] rounded-full bg-surface" />
              <div className="absolute inset-[7px] overflow-hidden rounded-full">
                <Image
                  src="/profile.jpg"
                  alt={site.name}
                  fill
                  priority
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
            {/* <div className="w-full">
              <HeroPipeline />
            </div> */}
          </div>
        </div>

        <div className="relative z-[1] mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className="reveal-item fact-tile px-5 py-6"
                style={{ animationDelay: `${380 + i * 90}ms` }}
              >
                <fact.icon size={18} className="fact-tile-icon text-accent" aria-hidden />
                <p className="mt-3 text-xl sm:text-2xl font-semibold text-foreground font-mono">
                  {fact.value}
                </p>
                <p className="mt-1.5 text-sm text-muted leading-snug">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
