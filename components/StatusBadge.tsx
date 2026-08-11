import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, string> = {
  Completed: "text-success border-success/30 bg-success/10",
  "In Progress": "text-accent border-accent/30 bg-accent-soft",
  Planned: "text-warning border-warning/30 bg-warning/10",
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {status}
    </span>
  );
}
