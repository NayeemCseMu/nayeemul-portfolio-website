"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, FileDown, Moon, Sun } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Flips only after the client mounts, to avoid a hydration mismatch
    // between the server-rendered markup and the theme-dependent icon.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "border-transparent bg-background/60"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Nayeemul
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:text-accent transition-colors"
          >
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
          <Link
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <FileDown size={16} aria-hidden />
            Resume
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-muted hover:text-foreground transition-colors border-b border-border last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-4 py-3 text-sm font-medium text-foreground"
            >
              <FileDown size={16} aria-hidden />
              Resume
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              type="button"
              aria-label="Toggle theme"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-4 py-3 text-sm font-medium text-foreground w-full hover:border-accent hover:text-accent transition-colors"
            >
              {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
              {mounted && (theme === "dark" ? "Light Mode" : "Dark Mode")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
