import Link from "next/link";
import { Mail } from "lucide-react";
import { footerLinks, site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold text-foreground">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.title}</p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted hover:text-accent transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted hover:text-accent transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Send email"
                className="text-muted hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-2">
          © {year} Nayeemul Islam. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
