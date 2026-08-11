"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryColorVar } from "@/data/projects";
import StatusBadge from "./StatusBadge";
import Chip from "./Chip";
import { GithubIcon } from "./icons/BrandIcons";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const catColor = categoryColorVar[project.category];

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <Link
      ref={ref}
      href={`/projects/${project.slug}`}
      onMouseMove={handleMouseMove}
      style={{ "--cat-color": catColor } as React.CSSProperties}
      className="card card-hover card-spotlight group flex h-full flex-col overflow-hidden p-6"
    >
      <span className="card-spotlight-glow" aria-hidden />
      <span
        className="absolute inset-x-0 top-0 h-0.5 opacity-70 transition-opacity group-hover:opacity-100"
        style={{ background: "var(--cat-color)" }}
        aria-hidden
      />

      <div className="relative z-[1] flex items-start justify-between gap-3">
        <span className="text-xs font-mono transition-colors" style={{ color: "var(--cat-color)" }}>
          {project.category}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="relative z-[1] mt-3 text-lg font-medium text-foreground transition-colors text-balance group-hover:[color:var(--cat-color)]">
        {project.title}
      </h3>
      <p className="relative z-[1] mt-2 text-sm text-muted leading-relaxed line-clamp-3">
        {project.summary}
      </p>

      <div className="relative z-[1] mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <Chip key={tech} label={tech} colorVar={catColor} size="sm" />
        ))}
      </div>

      <div className="relative z-[1] mt-auto pt-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-sm" style={{ color: "var(--cat-color)" }}>
          View case study
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
        {project.github && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-2">
            <GithubIcon size={13} />
            {project.stars ? (
              <span className="inline-flex items-center gap-0.5">
                <Star size={11} aria-hidden />
                {project.stars}
              </span>
            ) : null}
          </span>
        )}
      </div>
    </Link>
  );
}
