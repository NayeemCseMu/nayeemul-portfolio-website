import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

export default function ResumeCTA() {
  return (
    <section className="container-page py-16 sm:py-20">
      <Reveal>
        <SpotlightCard className="p-8 sm:p-12 text-center">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <FileText size={22} aria-hidden />
          </div>
          <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-foreground">
            Want the complete professional background?
          </h3>
          <p className="mt-2 text-muted max-w-md mx-auto">
            Full role history, technical detail, and education — in one document.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
            >
              View Resume
            </Link>
            <Link
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={16} aria-hidden />
              Download PDF
            </Link>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
