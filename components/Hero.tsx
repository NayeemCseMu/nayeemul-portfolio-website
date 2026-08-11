import Link from "next/link";
import { ArrowRight, FileDown, Mail, CircleDot, Phone } from "lucide-react";
import { site } from "@/data/site";
import HeroPipeline from "./HeroPipeline";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Hero() {
  return (
    <section className="container-page pt-14 sm:pt-20 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
            <CircleDot size={12} className="text-success" aria-hidden />
            {site.availability}
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-foreground text-balance leading-[1.08]">
            {site.name}
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-foreground/90 font-medium text-balance">
            Software Engineer building toward Data Analytics &amp; Cloud Computing
          </p>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            I bring 3+ years of software engineering experience and a background in
            computational science to build data-driven, analytical, and cloud-focused
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
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

          <div className="mt-8 flex items-center gap-5">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <GithubIcon size={17} />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <Mail size={17} aria-hidden />
              Email
            </a>
             <a
              href={`phone:${site.phone}`}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <Phone size={17} aria-hidden />
              +1 (249) 979-4922
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 fade-in" style={{ animationDelay: "120ms" }}>
          <HeroPipeline />
        </div>
      </div>
    </section>
  );
}
