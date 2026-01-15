export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Databases"
  | "Testing"
  | "Cloud"
  | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: string; // path to local image
};

export const skillCategories: Array<"All" | SkillCategory> = [
  "All",
  "Frontend",
  "Backend",
  "Languages",
  "Databases",
  "Testing",
  "Cloud",
  "Tools",
];

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Languages", icon: "/skills/javascript.svg" },
  { name: "Python", category: "Languages", icon: "skills/python.png" },
  { name: "TypeScript", category: "Languages", icon: "/skills/typescript.png" },

  // Frontend
  { name: "React.js", category: "Frontend", icon: "/skills/react.png" },
  { name: "Vue.js", category: "Frontend", icon: "/skills/vue.png" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/skills/tailwind.png" },

  // Backend
  { name: "REST APIs", category: "Backend", icon: "/skills/rest.png" },

  // Databases
  { name: "PostgreSQL", category: "Databases", icon: "/skills/postgresql.png" },
  { name: "MongoDB", category: "Databases", icon: "/skills/mongodb.png" },
  { name: "MySQL", category: "Databases", icon: "/skills/mysql.png" },

  // Testing
  { name: "Cypress", category: "Testing", icon: "/skills/cypress.png" },
  { name: "Jest", category: "Testing", icon: "/skills/jest.png" },

  // Cloud
  { name: "Google Cloud (GCP)", category: "Cloud", icon: "/skills/gcp.png" },

  // Tools
  { name: "Git", category: "Tools", icon: "/skills/git.png" },
  { name: "GitHub", category: "Tools", icon: "/skills/github.png" },
  { name: "GitHub Actions (CI/CD)", category: "Tools", icon: "/skills/github-actions.png" },
  { name: "Docker", category: "Tools", icon: "/skills/docker.png" },
  { name: "Jira", category: "Tools", icon: "/skills/jira.png" },
  { name: "VS Code", category: "Tools", icon: "/skills/vscode.png" },
  { name: "Postman", category: "Tools", icon: "/skills/postman.png" },
];
