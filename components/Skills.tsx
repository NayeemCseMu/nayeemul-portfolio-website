import { skillCategories } from "@/data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section className="container-page py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Organized by what it's used for, not a percentage bar."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.id} delayMs={i * 80}>
            <SkillCard cat={cat} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
