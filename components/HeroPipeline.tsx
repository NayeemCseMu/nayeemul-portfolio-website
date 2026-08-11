import SpotlightCard from "./SpotlightCard";

const stages = ["Raw Data", "Python / SQL", "Analytics", "Insights", "Cloud"];

export default function HeroPipeline() {
  return (
    <SpotlightCard
      className="px-5 py-6 sm:px-8 sm:py-8"
      role="img"
      aria-label="Data pipeline diagram: Raw Data flows to Python and SQL, then to Analytics, then to Insights, then to Cloud."
    >
      <p className="section-label">Data pipeline</p>
      <div className="mt-6 flex flex-col gap-0 sm:flex-row sm:items-center sm:gap-0" aria-hidden>
        {stages.map((stage, i) => (
          <div key={stage} className="flex sm:flex-1 items-center">
            <div className="flex flex-col items-start sm:items-center gap-2 sm:flex-1">
              <div className="flex items-center gap-3 sm:flex-col sm:gap-2">
                <span
                  className="inline-flex h-2.5 w-2.5 rounded-full shrink-0"
                  style={{
                    background: i === stages.length - 1 ? "var(--accent)" : "var(--border-strong)",
                    boxShadow: i === stages.length - 1 ? "0 0 0 4px var(--accent-soft)" : "none",
                  }}
                />
                <span className="text-sm text-foreground font-mono whitespace-nowrap">
                  {stage}
                </span>
              </div>
            </div>
            {i < stages.length - 1 && (
              <div
                className="hidden sm:block h-px flex-1 mx-2"
                style={{
                  background:
                    "linear-gradient(to right, var(--border-strong), var(--border))",
                }}
              />
            )}
            {i < stages.length - 1 && (
              <div
                className="sm:hidden ml-[3px] my-1.5 h-6 w-px"
                style={{ background: "var(--border-strong)" }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-2 font-mono">
        Data → Transform → Analyze → Predict → Deploy
      </p>
    </SpotlightCard>
  );
}
