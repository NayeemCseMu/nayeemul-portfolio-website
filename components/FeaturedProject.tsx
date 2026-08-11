"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { getFeaturedProject, categoryColorVar } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";
import Chip from "./Chip";
import RevenueByCategoryChart from "./RevenueByCategoryChart";
import { GithubIcon } from "./icons/BrandIcons";

const workflow = [
  "Business Problem",
  "Data Collection",
  "Data Cleaning",
  "Feature Engineering",
  "SQL Analysis",
  "Dashboard & Visualization",
  "Business Recommendations",
];

export default function FeaturedProject() {
  const project = getFeaturedProject();
  const catColor = categoryColorVar[project.category];
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <section className="container-page py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Case Study"
          title="Data Analytics — flagship project"
        />
      </Reveal>

      <Reveal delayMs={80}>
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          style={{ "--cat-color": catColor } as React.CSSProperties}
          className="card card-spotlight card-featured relative mt-10 overflow-hidden p-6 sm:p-10"
        >
          <span className="card-spotlight-glow" aria-hidden />
          <span
            className="absolute inset-x-0 top-0 h-[3px]"
            style={{ background: `linear-gradient(90deg, var(--cat-color), transparent)` }}
            aria-hidden
          />

          <div className="relative z-[1] flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono border-[color-mix(in_srgb,var(--cat-color)_40%,var(--border))] bg-[color-mix(in_srgb,var(--cat-color)_14%,transparent)] text-[var(--cat-color)]">
              <Sparkles size={11} aria-hidden />
              Flagship
            </span>
            <StatusBadge status={project.status} />
            <span className="text-xs font-mono text-[var(--cat-color)]">{project.category}</span>
          </div>

          <h3 className="relative z-[1] mt-4 text-2xl sm:text-3xl font-semibold text-foreground text-balance">
            {project.title}
          </h3>
          <p className="relative z-[1] mt-3 max-w-3xl text-muted leading-relaxed">
            {project.summary}
          </p>

          {/* KPI cards */}
          {project.kpis && (
            <div className="relative z-[1] mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border px-4 py-3 border-[color-mix(in_srgb,var(--cat-color)_18%,var(--border))] bg-[color-mix(in_srgb,var(--cat-color)_6%,var(--surface-2))]"
                >
                  <p className="text-lg sm:text-xl font-semibold text-foreground font-mono">
                    {kpi.value}
                  </p>
                  <p className="mt-0.5 text-xs text-muted leading-snug">{kpi.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Workflow */}
          <div className="relative z-[1] mt-8 -mx-1 overflow-x-auto scrollbar-thin pb-2">
            <div className="flex items-center gap-1 px-1 min-w-max">
              {workflow.map((step, i) => (
                <div key={step} className="flex items-center">
                  <span className="whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-mono text-muted border-[color-mix(in_srgb,var(--cat-color)_22%,var(--border))] bg-[color-mix(in_srgb,var(--cat-color)_6%,var(--surface-2))]">
                    {step}
                  </span>
                  {i < workflow.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="mx-1.5 shrink-0 text-[color-mix(in_srgb,var(--cat-color)_45%,var(--muted-2))]"
                      aria-hidden
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-[1] mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-foreground">Business problem</h4>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">Dataset</h4>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{project.data}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">Technologies</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} colorVar={catColor} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-3">Revenue by category</h4>
              <div className="card bg-surface-2 p-4 sm:p-5">
                <RevenueByCategoryChart />
              </div>
            </div>
          </div>

          {project.sqlHighlights && (
            <div className="relative z-[1] mt-10">
              <h4 className="text-sm font-medium text-foreground">
                Sample business questions answered in SQL
              </h4>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                {project.sqlHighlights.map((q) => (
                  <li key={q} className="text-sm text-muted leading-relaxed pl-4 relative">
                    <span
                      className="absolute left-0 top-2 h-1 w-1 rounded-full"
                      style={{ background: "var(--cat-color)" }}
                    />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="relative z-[1] mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-medium text-foreground">Key findings</h4>
              <ul className="mt-2 space-y-1.5">
                {project.results.map((r) => (
                  <li key={r} className="text-sm text-muted leading-relaxed pl-4 relative">
                    <span
                      className="absolute left-0 top-2 h-1 w-1 rounded-full"
                      style={{ background: "var(--cat-color)" }}
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground">Business recommendations</h4>
              <ul className="mt-2 space-y-1.5">
                {project.businessImpact.map((r) => (
                  <li key={r} className="text-sm text-muted leading-relaxed pl-4 relative">
                    <span
                      className="absolute left-0 top-2 h-1 w-1 rounded-full"
                      style={{ background: "var(--cat-color)" }}
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-[1] mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Read full case study
              <ArrowRight size={15} aria-hidden />
            </Link>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <GithubIcon size={15} />
                View source on GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-muted-2">
                <GithubIcon size={15} />
                Repository coming as the project progresses
              </span>
            )}
            {project.demoNote && (
              <span className="inline-flex items-center gap-2 text-sm text-muted-2">
                <ExternalLink size={15} aria-hidden />
                {project.demoNote}
              </span>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
