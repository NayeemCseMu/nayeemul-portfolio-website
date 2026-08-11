export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  colorVar: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "analytics",
    title: "Data Analytics",
    description: "Turning raw data into structured, decision-ready insight.",
    colorVar: "var(--cat-data-analytics)",
    skills: [
      "Python",
      "SQL",
      "Excel",
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Data Visualization",
      "Forecasting",
      "Predictive Analytics",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Data",
    description: "Infrastructure and pipelines that get data where it needs to go.",
    colorVar: "var(--cat-cloud)",
    skills: [
      "Firebase (Auth, Firestore, Cloud Messaging)",
      "Cloud Fundamentals (AWS / Azure / GCP — in progress)",
      "Data Pipelines",
      "ETL / ELT Concepts",
      "Cloud Storage",
      "Cloud Databases",
      "Docker (learning)",
      "REST APIs",
    ],
  },
  {
    id: "software",
    title: "Software Engineering",
    description: "3+ years of production application development.",
    colorVar: "var(--cat-software-engineering)",
    skills: [
      "Flutter",
      "Dart",
      "Java",
      "Kotlin",
      "REST APIs",
      "Firebase",
      "BLoC",
      "MVVM",
      "Git",
      "GitHub",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "The day-to-day toolkit.",
    colorVar: "var(--cat-tools)",
    skills: ["VS Code", "Android Studio", "Xcode", "Postman", "Figma"],
  },
];
