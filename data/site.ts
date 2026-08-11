// Central site configuration. Update contact details, links, and resume
// path here — the rest of the app reads from this single source of truth.

export const site = {
  name: "Nayeemul Islam",
  shortName: "Nayeem",
  title: "Software Engineer | Data Analytics | Cloud Computing",
  altPositioning: "Software Engineer transitioning into Data Analytics & Cloud Computing",
  location: "Toronto, Ontario, Canada",
  email: "mrnayeem75@gmail.com",
  phone: "+1 (249) 979-4922",
  github: "https://github.com/NayeemCseMu",
  linkedin: "https://www.linkedin.com/in/nayeem-islam-durjoy/",
  resumeUrl: "/resume/Nayeemul-Data-Analyst-Resume.pdf",
  url: "https://nayeemulislam.dev",
  availability: "Open to Data Analytics, Data Engineering & Cloud opportunities",
  description:
    "Portfolio of Nayeemul Islam, a software engineer with 3+ years of experience building applications and a current focus on data analytics, cloud computing, and data-driven solutions.",
} as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Analytics", href: "/#analytics" },
  { label: "Cloud", href: "/#cloud" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Analytics", href: "/#analytics" },
  { label: "Cloud", href: "/#cloud" },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Resume", href: site.resumeUrl },
  { label: "Contact", href: "/#contact" },
] as const;
