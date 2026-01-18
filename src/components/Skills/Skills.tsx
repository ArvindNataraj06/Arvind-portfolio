import { useMemo, useState } from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { skills } from "../../data/Skills";
import type { SkillCategory } from "../../data/Skills";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

type Tab = "All" | SkillCategory;

export default function Skills() {
  const [active, setActive] = useState<Tab>("All");
  const { lang } = useUI();
  const t = strings[lang].skills;

  const filtered = useMemo(() => {
    if (active === "All") return skills;
    return skills.filter((s) => s.category === active);
  }, [active]);

  return (
    <section id="skills" className="py-16">
      <Container>
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {filtered.map((s) => (
            <div
              key={s.name}
              title={s.category}
              className="
                rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm
                transition hover:-translate-y-0.5 hover:shadow-md
                dark:border-slate-800 dark:bg-slate-900
                dark:hover:border-slate-700 dark:hover:bg-slate-900/80
              "
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center">
                <img
                  src={s.icon}
                  alt={s.name}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {s.name}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
