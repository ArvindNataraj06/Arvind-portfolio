export type Lang = "en" | "de";

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
};

export const experience: Record<Lang, ExperienceItem[]> = {
  en: [
    {
      role: "Frontend Developer (Intern)",
      company: "DeepInsightsX",
      location: "Berlin, Germany",
      period: "Sept 2025 – Present",
      bullets: [
        "Build intuitive, responsive frontend interfaces and support seamless backend integrations.",
        "Translate design mockups and requirements into reusable, production-ready UI components.",
        "Collaborate in an agile startup environment to ideate, implement, and iterate on features.",
        "Work on frontend–backend integration ensuring smooth data flow and user experience.",
        "Improve code quality through clean architecture, debugging, and code reviews.",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
  ],

  de: [
    {
      role: "Frontend Entwickler (Praktikum)",
      company: "DeepInsightsX",
      location: "Berlin, Deutschland",
      period: "Sep 2025 – Heute",
      bullets: [
        "Entwickle intuitive, responsive Frontend-Oberflächen und unterstütze nahtlose Backend-Integrationen.",
        "Setze Design-Mockups und Anforderungen in wiederverwendbare, produktionsreife UI-Komponenten um.",
        "Arbeite in einem agilen Startup-Umfeld an Ideen, Implementierung und iterativen Verbesserungen.",
        "Sorge für saubere Frontend–Backend-Integration für einen reibungslosen Datenfluss und gute UX.",
        "Verbessere die Code-Qualität durch saubere Architektur, Debugging und Code Reviews.",
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
  ],
};
