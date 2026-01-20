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
  iconKey: string;
  colorClass: string;
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
  { name: "JavaScript", category: "Languages", iconKey: "js", colorClass: "text-yellow-400" },
  { name: "TypeScript", category: "Languages", iconKey: "ts", colorClass: "text-blue-600" },
  { name: "Python", category: "Languages", iconKey: "py", colorClass: "text-yellow-500" },

  // Frontend
  { name: "React.js", category: "Frontend", iconKey: "react", colorClass: "text-cyan-400" },
  { name: "Vue.js", category: "Frontend", iconKey: "vue", colorClass: "text-emerald-500" },
  { name: "Tailwind CSS", category: "Frontend", iconKey: "tailwind", colorClass: "text-sky-400" },

  // Backend
  { name: "REST APIs", category: "Backend", iconKey: "api", colorClass: "text-indigo-500" },

  // Databases
  { name: "PostgreSQL", category: "Databases", iconKey: "postgres", colorClass: "text-blue-500" },
  { name: "MongoDB", category: "Databases", iconKey: "mongo", colorClass: "text-green-500" },
  { name: "MySQL", category: "Databases", iconKey: "mysql", colorClass: "text-sky-600" },

  // Testing
  { name: "Jest", category: "Testing", iconKey: "jest", colorClass: "text-red-500" },
  { name: "Cypress", category: "Testing", iconKey: "cypress", colorClass: "text-emerald-600" },

  // Cloud
  { name: "Google Cloud (GCP)", category: "Cloud", iconKey: "gcp", colorClass: "text-blue-400" },

  // Tools
  { name: "Git", category: "Tools", iconKey: "git", colorClass: "text-orange-500" },
  { name: "GitHub", category: "Tools", iconKey: "github", colorClass: "text-slate-900 dark:text-slate-100" },
  { name: "GitHub Actions", category: "Tools", iconKey: "actions", colorClass: "text-indigo-500" },
  { name: "Docker", category: "Tools", iconKey: "docker", colorClass: "text-sky-500" },
  { name: "Jira", category: "Tools", iconKey: "jira", colorClass: "text-blue-700" },
  { name: "VS Code", category: "Tools", iconKey: "vscode", colorClass: "text-blue-500" },
  { name: "Postman", category: "Tools", iconKey: "postman", colorClass: "text-orange-500" },
];

