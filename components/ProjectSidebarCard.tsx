import type { Project } from "@/data/projects";
import { categoryColorVar } from "@/data/projects";
import SpotlightCard from "./SpotlightCard";
import Chip from "./Chip";
import StatusBadge from "./StatusBadge";

export default function ProjectSidebarCard({ project }: { project: Project }) {
  const catColor = categoryColorVar[project.category];

  return (
    <SpotlightCard colorVar={catColor} wrapperClassName="sticky top-24" className="p-6">
      <h3 className="text-sm font-medium text-foreground">Technologies</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Chip key={tech} label={tech} colorVar={catColor} size="sm" />
        ))}
      </div>

      <h3 className="mt-6 text-sm font-medium text-foreground">Category</h3>
      <p className="mt-2 text-sm" style={{ color: catColor }}>
        {project.category}
      </p>

      <h3 className="mt-6 text-sm font-medium text-foreground">Status</h3>
      <div className="mt-2">
        <StatusBadge status={project.status} />
      </div>
    </SpotlightCard>
  );
}
