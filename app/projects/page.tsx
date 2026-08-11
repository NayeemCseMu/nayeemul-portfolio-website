import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsGrid from "@/components/ProjectsGrid";
import type { ProjectCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies in data analytics, cloud computing, and software engineering by Nayeemul Islam.",
  alternates: { canonical: "/projects" },
};

const validCategories: (ProjectCategory | "All")[] = [
  "All",
  "Data Analytics",
  "Cloud",
  "Software Engineering",
  "Academic / Research",
];

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const requested = params.category as ProjectCategory | "All" | undefined;
  const initialCategory = validCategories.includes(requested ?? "All")
    ? requested ?? "All"
    : "All";

  return (
    <div className="container-page py-16 sm:py-20">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />

      <div className="mt-6 max-w-2xl">
        <p className="section-label">Projects</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Case studies, not repo dumps.
        </h1>
        <p className="mt-4 text-muted leading-relaxed">
          A curated set of projects across data analytics, cloud computing, and
          software engineering — each framed as a problem, an approach, and an
          outcome, with links back to the source code.
        </p>
      </div>

      <div className="mt-10">
        <ProjectsGrid initialCategory={initialCategory} />
      </div>
    </div>
  );
}
