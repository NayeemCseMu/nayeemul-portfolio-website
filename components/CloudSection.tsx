import Link from "next/link";
import { CheckCircle2, Hammer, BookOpen, ArrowRight } from "lucide-react";
import { categoryColorVar } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const catColor = categoryColorVar["Cloud"];

const columns = [
  {
    icon: CheckCircle2,
    title: "Completed / Hands-on",
    tone: "text-success",
    items: [
      "Firebase — Authentication, Firestore, Cloud Messaging",
      "REST API integration in production apps",
      "Cloud-connected mobile application architecture",
    ],
  },
  {
    icon: Hammer,
    title: "Currently Building",
    tone: "text-accent",
    items: [
      "Cloud deployment of the Customer Behaviour Analytics pipeline",
      "Hosted dashboard for the analytics case study",
    ],
  },
  {
    icon: BookOpen,
    title: "Currently Learning",
    tone: "text-warning",
    items: [
      "Cloud fundamentals — AWS / Azure / GCP",
      "Data pipelines & ETL/ELT concepts",
      "Cloud storage & managed cloud databases",
      "Docker & containerized deployment",
    ],
  },
];

export default function CloudSection() {
  return (
    <section id="cloud" className="container-page py-20 sm:py-28 scroll-mt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Cloud & Data Engineering"
          title="Extending software engineering into cloud infrastructure."
          description="My strongest hands-on cloud experience today is Firebase-backed application development from production mobile work. I'm actively extending that into broader cloud platforms, data pipelines, and deployment — shown honestly below rather than overstated."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((col, i) => (
          <Reveal key={col.title} delayMs={i * 90}>
            <SpotlightCard colorVar={catColor} className="p-6">
              <div className={`inline-flex items-center gap-2 text-sm font-medium ${col.tone}`}>
                <col.icon size={17} aria-hidden />
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="text-sm text-muted leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-current opacity-60" />
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={120}>
        <Link
          href="/projects/cloud-analytics-pipeline"
          className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
        >
          View the cloud deployment case study
          <ArrowRight size={14} aria-hidden />
        </Link>
      </Reveal>
    </section>
  );
}
