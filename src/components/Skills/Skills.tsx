import { useMemo, useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { skills, skillCategories } from "../../data/Skills";
import type { SkillCategory } from "../../data/Skills";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiJest,
  SiCypress,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
  SiPostman,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc"; 

const ICONS: Record<string, JSX.Element> = {
  js: <SiJavascript className="h-8 w-8" />,
  ts: <SiTypescript className="h-8 w-8" />,
  py: <SiPython className="h-8 w-8" />,

  react: <SiReact className="h-8 w-8" />,
  vue: <SiVuedotjs className="h-8 w-8" />,
  tailwind: <SiTailwindcss className="h-8 w-8" />,

  api: <TbApi className="h-8 w-8" />,

  postgres: <SiPostgresql className="h-8 w-8" />,
  mongo: <SiMongodb className="h-8 w-8" />,
  mysql: <SiMysql className="h-8 w-8" />,

  jest: <SiJest className="h-8 w-8" />,
  cypress: <SiCypress className="h-8 w-8" />,

  gcp: <SiGooglecloud className="h-8 w-8" />,

  git: <SiGit className="h-8 w-8" />,
  github: <FaGithub className="h-8 w-8" />,
  actions: <SiGithub className="h-8 w-8" />,
  docker: <SiDocker className="h-8 w-8" />,
  jira: <SiJira className="h-8 w-8" />,
  vscode: <  VscCode  className="h-8 w-8" />,
  postman: <SiPostman className="h-8 w-8" />,
};


type Tab = "All" | SkillCategory;

export default function Skills() {
  const [active, setActive] = useState<Tab>("All");
  const { lang } = useUI();
  const t = strings[lang].skills;

  const filtered = useMemo(() => {
    if (active === "All") return skills;
    return skills.filter((s) => s.category === active);
  }, [active]);

  const countFor = (tab: Tab) =>
    tab === "All" ? skills.length : skills.filter((s) => s.category === tab).length;

  return (
    <section
      id="skills"
      className="py-16 bg-slate-50 dark:bg-slate-950"
    >
      <Container>
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {skillCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
                ].join(" ")}
              >
                {cat}{" "}
                <span className="ml-1 opacity-70">
                  ({countFor(cat)})
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((s) => (
            <div
              key={s.name}
              className="
                group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm
                transition hover:-translate-y-0.5 hover:shadow-md
                dark:border-slate-800 dark:bg-slate-900
              "
              title={s.category}
            >
             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 transition group-hover:scale-105 dark:bg-slate-950 dark:ring-slate-800">
  <span className={s.colorClass}>
    {ICONS[s.iconKey]}
  </span>
</div>


              <div className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {s.name}
              </div>

              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {s.category}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
