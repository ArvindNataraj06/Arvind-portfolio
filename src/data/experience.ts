export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer (Intern)",
    company: "DeepInsightsX",
    location: "Berlin, Germany",
    period: "Sept 2025 – Present",
    bullets: [
      "Build intuitive, responsive frontend interfaces and support seamless backend integrations.",
      "Translate design mockups and requirements into reusable, production-ready UI components.",
      "Collaborate in an Agile startup environment to ideate, implement, and iterate on features.",
      "Work on frontend–backend integration ensuring smooth data flow and user experience.",
      "Improve code quality through clean architecture, debugging, and code reviews.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];
