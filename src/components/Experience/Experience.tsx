import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { experience } from "../../data/experience";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

export default function Experience() {
  const { lang } = useUI();
  const items = experience[lang];
  const t = strings[lang].experience;

  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.role}
              className="rounded-2xl border border-slate-200 bg-white p-6
                         dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.company} · {item.location}
                  </p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.period}
                </p>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {item.tech?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700
                                 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
