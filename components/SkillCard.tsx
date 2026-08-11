"use client";

import { useRef } from "react";
import { BarChart3, Cloud, Code2, Wrench, type LucideIcon } from "lucide-react";
import type { SkillCategory } from "@/data/skills";
import Chip from "./Chip";

const icons: Record<string, LucideIcon> = {
  analytics: BarChart3,
  cloud: Cloud,
  software: Code2,
  tools: Wrench,
};

export default function SkillCard({ cat }: { cat: SkillCategory }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = icons[cat.id] ?? Code2;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ "--cat-color": cat.colorVar } as React.CSSProperties}
      className="card card-hover card-spotlight group relative h-full overflow-hidden p-6"
    >
      <span className="card-spotlight-glow" aria-hidden />
      <span
        className="absolute inset-x-0 top-0 h-0.5 opacity-70 transition-opacity group-hover:opacity-100"
        style={{ background: "var(--cat-color)" }}
        aria-hidden
      />

      <div className="relative z-[1] flex items-center gap-3">
        <div
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--cat-color)_14%,transparent)] text-[var(--cat-color)]"
          aria-hidden
        >
          <Icon size={18} />
        </div>
        <h3 className="font-semibold text-foreground">{cat.title}</h3>
      </div>
      <p className="relative z-[1] mt-3 text-sm text-muted">{cat.description}</p>

      <div className="relative z-[1] mt-4 flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <Chip key={skill} label={skill} colorVar={cat.colorVar} />
        ))}
      </div>
    </div>
  );
}
