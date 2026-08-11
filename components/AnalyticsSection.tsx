import Link from "next/link";
import { Database, SearchCheck, LineChart, Target } from "lucide-react";
import { categoryColorVar } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import Chip from "./Chip";

const catColor = categoryColorVar["Data Analytics"];

const capabilities = [
  {
    icon: Database,
    title: "Data preparation",
    tools: ["Python", "Pandas", "SQL", "Excel"],
    body: "Collecting, cleaning, and validating raw data — handling missing values, duplicates, and inconsistent formats before any analysis begins.",
  },
  {
    icon: SearchCheck,
    title: "Exploratory & statistical analysis",
    tools: ["NumPy", "Statistics", "EDA"],
    body: "Understanding distributions, trends, and outliers, and applying statistical reasoning to separate signal from noise.",
  },
  {
    icon: LineChart,
    title: "Visualization & reporting",
    tools: ["Data Visualization", "Business Analysis"],
    body: "Turning analysis into visuals and narratives that a non-technical stakeholder can act on.",
  },
  {
    icon: Target,
    title: "Forecasting & optimization",
    tools: ["Forecasting", "Predictive Analytics"],
    body: "Modeling demand and revenue patterns to support planning, staffing, and inventory decisions.",
  },
];

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="container-page py-20 sm:py-28 scroll-mt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Data Analytics"
          title="Turning data into decisions."
          description="I work across the full analytics workflow — from messy raw data to a defensible business recommendation — using Python, SQL, and Excel as the core toolkit."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delayMs={i * 80}>
            <SpotlightCard colorVar={catColor} className="p-6">
              <div
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                style={{
                  background: "color-mix(in srgb, var(--cat-color) 14%, transparent)",
                  color: "var(--cat-color)",
                }}
              >
                <cap.icon size={19} aria-hidden />
              </div>
              <h3 className="mt-4 font-medium text-foreground">{cap.title}</h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">{cap.body}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cap.tools.map((tool) => (
                  <Chip key={tool} label={tool} colorVar={catColor} size="sm" />
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={120}>
        <p className="mt-8 text-sm text-muted">
          See these skills applied end-to-end in the{" "}
          <Link
            href="/projects/customer-behaviour-analysis"
            className="text-accent hover:underline underline-offset-4"
          >
            Customer Behaviour Analytics
          </Link>{" "}
          case study, or browse the{" "}
          <Link href="/projects" className="text-accent hover:underline underline-offset-4">
            full project archive
          </Link>
          .
        </p>
      </Reveal>
    </section>
  );
}
