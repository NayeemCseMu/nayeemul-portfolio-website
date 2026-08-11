import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function SoftwareEngineeringSection() {
  const curated = projects
    .filter((p) => p.category === "Software Engineering" && p.tier !== "archive")
    .slice(0, 3);

  return (
    <section className="container-page py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <SectionHeading
            eyebrow="Software Engineering"
            title="3+ years building production applications."
          />
        </Reveal>
        <Reveal delayMs={80}>
          <Link
            href="/projects?category=Software+Engineering"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline underline-offset-4"
          >
            All software projects
            <ArrowRight size={14} aria-hidden />
          </Link>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {curated.map((project, i) => (
          <Reveal key={project.slug} delayMs={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
