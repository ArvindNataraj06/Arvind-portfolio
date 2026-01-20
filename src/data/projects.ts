export type Lang = "en" | "de";

export type ProjectItem = {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];

  // NEW (optional)
  accent?: "slate" | "blue" | "violet";
  coverImage?: string; // optional image (public/projects/xyz.png)
  links?: {
    label: string; // e.g. "GitHub" | "Live" | "Case Study"
    href: string;
    kind?: "github" | "live" | "external";
  }[];
};

export const projects: Record<Lang, ProjectItem[]> = {
  en: [
    {
      title: "AI-Powered Real-Time Traffic Alert Dashboard (Master’s Thesis)",
      description:
        "An AI-driven dashboard that collects live road data and alerts users about traffic incidents in real-time.",
      bullets: [
        "Collects real-time traffic events (accidents, congestion, closures).",
        "Integrates incident APIs for processing and map visualization.",
        "Uses ML to identify patterns and improve prediction accuracy.",
        "Modern frontend dashboard for real-time decision-making.",
      ],
      tech: ["React", "TypeScript", "APIs", "Machine Learning"],
      accent: "violet",
      links: [
        // add when ready
        // { label: "GitHub", href: "https://...", kind: "github" },
        // { label: "Live", href: "https://...", kind: "live" },
      ],
    },
    {
      title: "Smart Pantry – Microservices-Based Recipe Management System",
      description:
        "A recipe management system built with microservices, focusing on scalable UI and clean integration.",
      bullets: [
        "Developed UI features for recipe and user management.",
        "Implemented validation and frontend logic for consistent UX.",
        "Collaborated in an agile team setup.",
      ],
      tech: ["React", "Microservices", "Git", "Agile"],
      accent: "blue",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Study-Program-Applied-Computer-Science/software-architecture-and-development-collablab.git",
          kind: "github",
        },
      ],
    },
  ],

  de: [
    {
      title: "KI-gestütztes Echtzeit-Dashboard für Verkehrswarnungen (Masterarbeit)",
      description:
        "Ein KI-basiertes Dashboard, das Live-Straßendaten sammelt und Nutzer in Echtzeit über Verkehrsvorfälle informiert.",
      bullets: [
        "Erfasst Verkehrsevents in Echtzeit (Unfälle, Stau, Sperrungen).",
        "Integriert Incident-APIs zur Verarbeitung und Kartenvisualisierung.",
        "Nutzt ML, um Muster zu erkennen und Prognosen zu verbessern.",
        "Modernes Frontend-Dashboard für Entscheidungen in Echtzeit.",
      ],
      tech: ["React", "TypeScript", "APIs", "Machine Learning"],
      accent: "violet",
    },
    {
      title: "Smart Pantry – Microservices-basiertes Rezept-Management-System",
      description:
        "Ein Rezept-Management-System mit Microservices, mit Fokus auf skalierbares UI und saubere Integration.",
      bullets: [
        "UI-Features für Rezept- und Nutzerverwaltung umgesetzt.",
        "Validierung und Frontend-Logik für konsistente UX implementiert.",
        "Zusammenarbeit im agilen Team-Setup.",
      ],
      tech: ["React", "Microservices", "Git", "Agile"],
      accent: "blue",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Study-Program-Applied-Computer-Science/software-architecture-and-development-collablab.git",
          kind: "github",
        },
      ],
    },
  ],
};
