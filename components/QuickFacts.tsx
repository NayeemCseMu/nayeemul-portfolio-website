import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const facts = [
  { value: "3+ Years", label: "Software Engineering Experience" },
  { value: "M.Sc.", label: "Computational Science" },
  { value: "Python + SQL", label: "Analytics Foundation" },
  { value: "Cloud", label: "Current Focus" },
];

export default function QuickFacts() {
  return (
    <section className="container-page -mt-4 sm:-mt-8 pb-4" aria-label="Quick facts">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {facts.map((fact, i) => (
          <Reveal key={fact.label} delayMs={i * 60}>
            <SpotlightCard className="px-5 py-6">
              <p className="text-xl sm:text-2xl font-semibold text-foreground font-mono">
                {fact.value}
              </p>
              <p className="mt-1.5 text-sm text-muted leading-snug">{fact.label}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
