"use client";

import { useState } from "react";
import { Code2, Sigma, BarChart3, Cloud } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stages = [
  {
    icon: Code2,
    title: "Software Engineering",
    body: "3+ years building production Flutter applications — architecture, APIs, and shipped products.",
  },
  {
    icon: Sigma,
    title: "Computational Science",
    body: "M.Sc. study strengthening the mathematical and computational foundation behind the code.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    body: "Applying that foundation to Python, SQL, and statistical analysis to turn data into decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    body: "Extending analytics work into cloud infrastructure, pipelines, and scalable deployment.",
  },
];

const lastIndex = stages.length - 1;

export default function CareerEvolution() {
  const [selected, setSelected] = useState(lastIndex);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? selected;

  return (
    <section className="container-page py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Career Evolution"
          title="A widening engineering foundation — not a restart."
          description="My career started with building software products. Graduate study strengthened my computational and analytical foundation. Today, I'm combining those experiences to solve problems where software, data, and cloud infrastructure intersect."
          align="center"
        />
      </Reveal>

      <div className="mt-14 relative">
        <div
          className="hidden md:block absolute top-8 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--border-strong) 8%, var(--border-strong) 92%, transparent)",
          }}
          aria-hidden
        />
        <div
          className="hidden md:block absolute top-8 left-0 h-px transition-[width] duration-500 ease-out"
          style={{
            width: `${(active / lastIndex) * 100}%`,
            background: "linear-gradient(to right, transparent, var(--accent) 8%, var(--accent))",
          }}
          aria-hidden
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {stages.map((stage, i) => {
            const isActive = i === active;
            const isCurrent = i === lastIndex;
            return (
              <Reveal key={stage.title} delayMs={i * 100}>
                <button
                  type="button"
                  aria-pressed={selected === i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  onClick={() => setSelected(i)}
                  className="relative flex w-full flex-col items-center rounded-xl px-2 py-2 text-center transition-transform duration-300 ease-out"
                  style={{ transform: isActive ? "translateY(-4px)" : undefined }}
                >
                  {isCurrent && (
                    <span className="absolute -top-3 rounded-full border border-[color-mix(in_srgb,var(--accent)_45%,var(--border))] bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      Now
                    </span>
                  )}
                  <div
                    className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 ease-out"
                    style={{
                      borderColor: isActive ? "var(--accent)" : "var(--border-strong)",
                      background: isActive ? "var(--accent-soft)" : "var(--surface)",
                      color: "var(--accent)",
                      boxShadow: isActive ? "0 0 0 6px var(--accent-soft)" : "none",
                      transform: isActive ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <stage.icon size={24} aria-hidden />
                  </div>
                  <span
                    className="mt-3 font-mono text-xs transition-colors duration-300"
                    style={{ color: isActive ? "var(--accent)" : "var(--muted-2)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 font-medium text-foreground">{stage.title}</h3>
                  <p
                    className="mt-2 text-sm leading-relaxed max-w-[15rem] transition-colors duration-300"
                    style={{ color: isActive ? "var(--foreground)" : "var(--muted)" }}
                  >
                    {stage.body}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
