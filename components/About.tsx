import { GraduationCap, Building2, LineChart } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const points = [
  {
    icon: Building2,
    title: "Production software experience",
    body: "3+ years building and shipping Flutter applications in production — multi-vendor e-commerce systems spanning customer, seller, and delivery experiences.",
  },
  {
    icon: GraduationCap,
    title: "Graduate computational foundation",
    body: "An M.Sc. in Computational Science at Laurentian University sharpened the mathematical and analytical thinking behind the code.",
  },
  {
    icon: LineChart,
    title: "Data-first current focus",
    body: "Now applying that engineering and computational background to data analytics and cloud infrastructure — building the tools that turn data into decisions.",
  },
];

export default function About() {
  return (
    <section id="about" className="container-page py-20 sm:py-28 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Engineering foundation. Analytical mindset."
            />
          </Reveal>
          <Reveal delayMs={80}>
            {/* all text in paragraphs should be justified */}
            <div className="mt-6 space-y-4 text-muted leading-relaxed text-justify">
              <p>
                I started my career writing production software — Flutter applications
                used by real customers, sellers, and delivery teams, shipped and
                maintained over 3+ years as a software engineer. That work taught me how
                to build things that have to actually work: clean architecture, APIs
                that hold up under real usage, and the discipline of shipping and
                debugging in production.
              </p>
              <p>
                Graduate study in Computational Science at Laurentian University gave
                that experience a stronger analytical and mathematical foundation —
                modeling problems computationally rather than just implementing them.
              </p>
              <p>
                Today I&apos;m pointing that combination — software engineering plus
                computational thinking — at data analytics and cloud computing. I&apos;m
                building data-driven solutions using Python, SQL, and cloud
                technologies, with the same production mindset I brought to mobile
                development: understand the problem, build something reliable, and
                measure whether it actually works.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 content-start">
          {points.map((point, i) => (
            <Reveal key={point.title} delayMs={i * 90}>
              <div className="card card-hover p-6 flex gap-4">
                <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <point.icon size={19} aria-hidden />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{point.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
