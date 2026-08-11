"use client";

import { useMemo, useState } from "react";
import {
  projects,
  projectCategories,
  categoryColorVar,
  type ProjectCategory,
} from "@/data/projects";
import ProjectCard from "./ProjectCard";

type ProjectsGridProps = {
  initialCategory?: ProjectCategory | "All";
};

export default function ProjectsGrid({ initialCategory = "All" }: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectCategory | "All">(initialCategory);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  const counts = useMemo(() => {
    const map = new Map<ProjectCategory | "All", number>([["All", projects.length]]);
    for (const cat of projectCategories) {
      if (cat === "All") continue;
      map.set(cat, projects.filter((p) => p.category === cat).length);
    }
    return map;
  }, []);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((cat) => {
          const isActive = active === cat;
          const catColor = cat === "All" ? undefined : categoryColorVar[cat];
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              style={catColor ? ({ "--cat-color": catColor } as React.CSSProperties) : undefined}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? catColor
                    ? "border-[var(--cat-color)] bg-[color-mix(in_srgb,var(--cat-color)_12%,transparent)] text-[var(--cat-color)]"
                    : "border-accent bg-accent-soft text-accent"
                  : "border-border text-muted hover:text-foreground hover:border-border-strong"
              }`}
            >
              {cat}
              <span
                className={`rounded-full px-1.5 py-0.5 text-xs font-mono leading-none ${
                  isActive
                    ? catColor
                      ? "bg-[color-mix(in_srgb,var(--cat-color)_20%,transparent)]"
                      : "bg-accent/20"
                    : "bg-border/60 text-muted-2"
                }`}
              >
                {counts.get(cat) ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-sm text-muted">
          More projects in this category are on the way.
        </p>
      )}
    </div>
  );
}
