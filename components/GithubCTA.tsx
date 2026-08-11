import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import { GithubIcon } from "./icons/BrandIcons";

export default function GithubCTA() {
  return (
    <section className="container-page py-16 sm:py-20">
      <Reveal>
        <SpotlightCard className="p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <GithubIcon size={22} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">
                Code is the evidence.
              </h3>
              <p className="mt-1.5 text-sm text-muted max-w-md leading-relaxed">
                Every project on this site is a curated selection — the strongest
                examples of production and learning work, not a raw repository dump.
              </p>
            </div>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors shrink-0"
          >
            View GitHub profile
            <ArrowRight size={15} aria-hidden />
          </a>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
