export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer / Flutter Developer",
    company: "Quomodosoft",
    location: "Dhaka, Bangladesh",
    period: "2022 — 2024",
    summary:
      "Led mobile application development across a multi-vendor e-commerce ecosystem — separate apps for customers, sellers, and delivery agents — taking features from research through production deployment.",
    highlights: [
      "Built and maintained production Flutter applications for three distinct user roles (customer, seller, delivery) sharing a common backend and design system.",
      "Implemented BLoC-based state management to keep business logic testable and UI predictable across large, fast-moving codebases.",
      "Integrated REST APIs and Firebase services (auth, push notifications, real-time data) to connect mobile clients to backend systems.",
      "Evaluated, integrated, and maintained third-party SDKs and plugins, balancing functionality against app size and performance.",
      "Conducted technical research and proof-of-concept work to de-risk new features before committing to full implementation.",
      "Owned releases through to production, including debugging, performance tuning, and store submission.",
    ],
    stack: ["Flutter", "Dart", "BLoC", "REST APIs", "Firebase", "Git"],
  },
  {
    role: "Software Engineer / Mobile Application Developer",
    company: "Salah Software Solutions",
    location: "Sylhet, Bangladesh",
    period: "2020 — 2022",
    summary:
      "Started as a mobile application developer, building UI and integrating backend services for Flutter applications while developing foundational engineering practices in a collaborative team setting.",
    highlights: [
      "Developed and implemented UI for Flutter applications from design specifications.",
      "Integrated REST APIs to connect mobile applications with backend services.",
      "Implemented and configured third-party SDKs and plugins for application features.",
      "Contributed to application architecture decisions as mobile codebases matured.",
      "Collaborated within a small engineering team on shared codebases, code review, and version control practices.",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Git"],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  status: string;
};

export const education: EducationEntry[] = [
  {
    degree: "M.Sc. Computational Science",
    institution: "Laurentian University",
    location: "Sudbury, Ontario, Canada",
    status: "Graduated - 2026",
  },
  {
    degree: "B.Sc. Computer Science & Engineering",
    institution: "Metropolitan University",
    location: "Bangladesh",
    status: "Completed",
  },
];
