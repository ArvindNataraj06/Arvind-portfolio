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

   {
  title: "Event Scheduling App",
  description:
    "Event scheduling and management app with authentication, calendar views, event CRUD, email invitations, and search/filtering.",
  accent: "blue",
  coverImage: "", // optional, you can remove this line
  bullets: [
    "Auth flow (login/signup) and protected pages",
    "Calendar views (day/week/month) and event CRUD",
    "Email invitations to attendees using EmailJS",
    "Automated testing with Jest + Cypress and CI via GitHub Actions",
  ],
  tech: ["React", "Redux", "JavaScript", "EmailJS", "Jest", "Cypress", "GitHub Actions"],
  links: [
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/ArvindNataraj06/usability-testing-and-verification-testtrio.git",
    },
  ],
},

{
  title: "Portfolio Website",
  description:
    "My personal portfolio built with React + TypeScript + Tailwind, featuring dark/light mode, EN/DE language switch, and clean reusable components.",
  accent: "violet",
  bullets: [
    "Responsive layout with reusable UI components",
    "Dark/Light theme toggle with persisted preference",
    "EN/DE language switch with centralized strings",
    "Polished sections: Hero, About, Experience, Skills, Projects, Contact, Footer",
  ],
  tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Context API"],
  links: [
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/ArvindNataraj06/Arvind-portfolio",
    },
    // If you deploy to Vercel later, add:
    // { kind: "live", label: "Live Demo", href: "https://your-vercel-url.vercel.app" },
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

    {
  title: "Event-Planungs-App",
  description:
    "App zur Event- und Terminverwaltung mit Auth, Kalenderansichten, CRUD für Events, E-Mail-Einladungen und Suche/Filter.",
  accent: "blue",
  coverImage: "",
  bullets: [
    "Auth-Flow (Login/Signup) und geschützte Seiten",
    "Kalenderansichten (Tag/Woche/Monat) und Event-CRUD",
    "E-Mail-Einladungen an Teilnehmer mit EmailJS",
    "Automatisierte Tests mit Jest + Cypress und CI via GitHub Actions",
  ],
  tech: ["React", "Redux", "JavaScript", "EmailJS", "Jest", "Cypress", "GitHub Actions"],
  links: [
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/ArvindNataraj06/usability-testing-and-verification-testtrio.git",
    },
  ],
},

{
  title: "Portfolio Website",
  description:
    "Mein persönliches Portfolio mit React + TypeScript + Tailwind, inklusive Dark/Light Mode, EN/DE Sprachumschaltung und modularen Komponenten.",
  accent: "violet",
  bullets: [
    "Responsives Layout mit wiederverwendbaren UI-Komponenten",
    "Dark/Light Theme Toggle mit Speicherung",
    "EN/DE Sprachumschaltung über zentrale Strings",
    "Sektionen: Hero, About, Experience, Skills, Projects, Contact, Footer",
  ],
  tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Context API"],
  links: [
    {
      kind: "github",
      label: "GitHub",
      href: "https://github.com/ArvindNataraj06/Arvind-portfolio",
    },
  ],
},

  ],
};
