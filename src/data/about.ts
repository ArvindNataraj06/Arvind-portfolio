export type AboutLang = "en" | "de";

export type AboutData = {
  intro: string;
  quote: string;
  resumeUrl: string;
  education: Array<{ title: string; org: string; period: string }>;
  highlights: Array<{ title: string; desc: string; icon: "code" | "db" | "ux" | "spark" }>;
};

export const about: Record<AboutLang, AboutData> = {
  en: {
    intro:
      "I’m Arvind Nataraj, a Master’s student in Applied Computer Science in Germany. I enjoy building clean, user-focused web applications and shipping real features end-to-end with React, TypeScript, and modern UI patterns.",
    quote:
      "I like turning ideas into polished products simple UI, strong UX, and reliable code.",
    resumeUrl: "/Arvind_Nataraj_Resume.pdf",

    education: [
      {
        title: "M.Sc. Applied Computer Science",
        org: "SRH University Heidelberg",
        period: "2024 – 2026",
      },
      {
        title: "B.E. (or B.Tech) — (Your Degree)",
        org: "(Your University Name)",
        period: "(Year – Year)",
      },
    ],

    highlights: [
      {
        title: "Frontend Engineering",
        desc: "React + TypeScript, component architecture, responsive UI, and production-ready design systems.",
        icon: "code",
      },
      {
        title: "Backend & APIs",
        desc: "Experience integrating REST APIs, handling auth, and building scalable app flows.",
        icon: "db",
      },
      {
        title: "UX-Minded",
        desc: "I focus on clean layouts, accessibility basics, and smooth interactions for real users.",
        icon: "ux",
      },
      {
        title: "Always Learning",
        desc: "I improve daily through projects, feedback, and iteration—aiming for measurable progress.",
        icon: "spark",
      },
    ],
  },

  de: {
    intro:
      "Ich bin Arvind Nataraj und Masterstudent der Applied Computer Science in Deutschland. Ich entwickle gerne saubere, nutzerorientierte Webanwendungen und setze Features end-to-end mit React, TypeScript und modernen UI-Patterns um.",
    quote:
      "Ich verwandle Ideen in ausgereifte Produkte – einfache UI, gute UX und zuverlässiger Code.",
    resumeUrl: "/Arvind_Nataraj_Resume.pdf",

    education: [
      {
        title: "M.Sc. Applied Computer Science",
        org: "SRH University Heidelberg",
        period: "2024 – 2026",
      },
      {
        title: "B.E. (oder B.Tech) — (Dein Abschluss)",
        org: "(Deine Universität)",
        period: "(Jahr – Jahr)",
      },
    ],

    highlights: [
      {
        title: "Frontend Engineering",
        desc: "React + TypeScript, Komponenten-Architektur, responsive UI und produktionsreife Design-Systeme.",
        icon: "code",
      },
      {
        title: "Backend & APIs",
        desc: "Erfahrung mit REST-API-Integrationen, Auth-Flows und skalierbaren App-Prozessen.",
        icon: "db",
      },
      {
        title: "UX-orientiert",
        desc: "Ich achte auf klare Layouts, grundlegende Accessibility und flüssige Interaktionen.",
        icon: "ux",
      },
      {
        title: "Kontinuierliches Lernen",
        desc: "Ich verbessere mich täglich durch Projekte, Feedback und Iteration – mit messbarem Fortschritt.",
        icon: "spark",
      },
    ],
  },
};
