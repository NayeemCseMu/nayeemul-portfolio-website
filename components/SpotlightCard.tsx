"use client";

import { useRef, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  colorVar?: string;
  topBar?: boolean;
  /** Classes for the outer box — positioning within the parent layout (sticky, h-full, w-*). */
  wrapperClassName?: string;
  children: ReactNode;
};

export default function SpotlightCard({
  colorVar,
  topBar = true,
  wrapperClassName = "",
  className = "",
  children,
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

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
      style={colorVar ? ({ "--cat-color": colorVar } as CSSProperties) : undefined}
      className={`group card card-hover card-spotlight relative h-full overflow-hidden ${wrapperClassName}`}
      {...rest}
    >
      <span className="card-spotlight-glow" aria-hidden />
      {topBar && (
        <span
          className="absolute inset-x-0 top-0 h-0.5 opacity-70 transition-opacity group-hover:opacity-100"
          style={{ background: "var(--cat-color, var(--accent))" }}
          aria-hidden
        />
      )}
      <div className={`relative z-[1] h-full ${className}`}>{children}</div>
    </div>
  );
}
