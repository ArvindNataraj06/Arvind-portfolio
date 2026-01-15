export type ProjectItem = {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  links?: { label: string; href: string }[];
};

export const projects: ProjectItem[] = [
  {
    title: "AI-Powered Real-Time Traffic Alert Dashboard (Master’s Thesis)",
    description:
      "An AI-driven dashboard that collects live road data and alerts users about traffic incidents in real-time.",
    bullets: [
      "Collects real-time traffic events (accidents, congestion, closures).",
      "Integrates TomTom-like APIs for incident processing and visualization.",
      "Uses ML to identify patterns and improve prediction accuracy.",
      "Modern frontend dashboard for real-time decision-making.",
    ],
    tech: ["React", "TypeScript", "APIs", "Machine Learning"],
  },
  {
    title: "Smart Pantry – Microservices-Based Recipe Management System",
    description:
      "A recipe management system built with microservices, focusing on scalable UI and clean integration.",
    bullets: [
      "Developed UI features for recipe and user management.",
      "Implemented validation and frontend logic for consistent UX.",
      "Collaborated in an Agile team setup.",
    ],
    tech: ["React", "Microservices", "Git", "Agile"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Study-Program-Applied-Computer-Science/software-architecture-and-development-collablab.git",
      },
    ],
  },
];
