import { GraduationCap, MapPin } from "lucide-react";
import { experience, education } from "@/data/experience";
import { categoryColorVar } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Chip from "./Chip";

const swColor = categoryColorVar["Software Engineering"];

export default function Experience() {
  return (
    <section id="experience" className="container-page py-20 sm:py-28 scroll-mt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Career Journey"
          title="Where the engineering experience comes from."
        />
      </Reveal>

      <div className="mt-12 relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px hidden sm:block"
          style={{ background: "var(--border)" }}
          aria-hidden
        />
        <ol className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delayMs={i * 100}>
              <li className="relative sm:pl-10">
                <span
                  className="absolute left-0 top-1.5 hidden sm:inline-flex h-[15px] w-[15px] rounded-full border-2"
                  style={{
                    borderColor: "var(--accent)",
                    background: "var(--background)",
                  }}
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-foreground">{job.role}</h3>
                  <span className="text-xs font-mono text-muted-2">{job.period}</span>
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={13} aria-hidden />
                  {job.company} — {job.location}
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
                  {job.summary}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <Chip key={tech} label={tech} colorVar={swColor} size="sm" />
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delayMs={100}>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((ed) => (
            <SpotlightCard key={ed.degree} className="p-6 flex gap-4">
              <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <GraduationCap size={19} aria-hidden />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{ed.degree}</h3>
                <p className="mt-1 text-sm text-muted">
                  {ed.institution} — {ed.location}
                </p>
                <span className="mt-1.5 inline-block text-xs font-mono text-muted-2">
                  {ed.status}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
