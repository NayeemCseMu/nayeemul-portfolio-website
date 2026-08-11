import type { CSSProperties } from "react";

type ChipProps = {
  label: string;
  colorVar?: string;
  size?: "sm" | "md";
};

export default function Chip({ label, colorVar, size = "md" }: ChipProps) {
  return (
    <span
      style={colorVar ? ({ "--cat-color": colorVar } as CSSProperties) : undefined}
      className={`rounded-full border font-mono transition-colors border-[color-mix(in_srgb,var(--cat-color,var(--accent))_32%,var(--border))] bg-[color-mix(in_srgb,var(--cat-color,var(--accent))_9%,var(--surface))] text-[color-mix(in_srgb,var(--cat-color,var(--accent))_70%,var(--foreground))] hover:border-[color-mix(in_srgb,var(--cat-color,var(--accent))_55%,var(--border))] hover:bg-[color-mix(in_srgb,var(--cat-color,var(--accent))_18%,var(--surface))] ${
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs"
      }`}
    >
      {label}
    </span>
  );
}
