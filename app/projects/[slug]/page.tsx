import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { projects, getProjectBySlug, categoryColorVar } from "@/data/projects";
import Breadcrumbs from "@/components/Breadcrumbs";
import StatusBadge from "@/components/StatusBadge";
import ProjectSidebarCard from "@/components/ProjectSidebarCard";
import { GithubIcon } from "@/components/icons/BrandIcons";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-6 border-b border-border last:border-0">
      <h2 className="text-sm font-medium text-foreground">{title}</h2>
      <div className="mt-2 text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}

function BulletList({ items, color }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="pl-4 relative">
          <span
            className="absolute left-0 top-2 h-1 w-1 rounded-full"
            style={{ background: color ?? "var(--accent)" }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isSoftwareProject = project.category === "Software Engineering";
  const catColor = categoryColorVar[project.category];

  return (
    <div className="container-page py-16 sm:py-20">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <div className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="section-label" style={{ color: catColor }}>
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance">
          {project.title}
        </h1>
        <p className="mt-1.5 text-sm text-muted-2 font-mono">{project.heroNote}</p>
        <p className="mt-5 text-muted leading-relaxed">{project.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <GithubIcon size={16} />
              View on GitHub
              {typeof project.stars === "number" && (
                <span className="inline-flex items-center gap-1 text-xs text-muted-2">
                  <Star size={12} aria-hidden />
                  {project.stars}
                </span>
              )}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-2">
              <GithubIcon size={16} />
              Repository — [Add GitHub repository]
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <ExternalLink size={16} aria-hidden />
              {project.demoLabel ?? "Live Demo"}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-2">
              <ExternalLink size={16} aria-hidden />
              Live demo — {project.status === "Completed" ? "[Add link]" : project.status.toLowerCase()}
            </span>
          )}
          {project.appStore ? (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <ExternalLink size={16} aria-hidden />
              {project.appStoreLabel ?? "App Store"}
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <Block title="Problem">{project.problem}</Block>

          {!isSoftwareProject && <Block title="Dataset">{project.data}</Block>}

          <Block title="Methodology">
            <BulletList items={project.method} color={catColor} />
          </Block>

          <Block title="Results">
            <BulletList items={project.results} color={catColor} />
          </Block>

          <Block title="Business impact">
            <BulletList items={project.businessImpact} color={catColor} />
          </Block>

          {project.challenges && project.challenges.length > 0 && (
            <Block title="Challenges">
              <BulletList items={project.challenges} color={catColor} />
            </Block>
          )}

          {project.learnings && project.learnings.length > 0 && (
            <Block title="What I learned">
              <BulletList items={project.learnings} color={catColor} />
            </Block>
          )}

          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <Block title="Future improvements">
              <BulletList items={project.futureImprovements} color={catColor} />
            </Block>
          )}
        </div>

        <div className="lg:col-span-4">
          <ProjectSidebarCard project={project} />
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/projects"
          className="text-sm text-accent hover:underline underline-offset-4"
        >
          ← Back to all projects
        </Link>
      </div>
    </div>
  );
}
