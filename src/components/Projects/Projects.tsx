import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/projects";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

export default function Projects() {
  const { lang } = useUI();
  const t = strings[lang].projects;
  const items = projects[lang];

  return (
    <section id="projects" className="py-16">
      <Container>
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-6
                         dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {p.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {p.description}
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700
                               dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {p.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {l.label}
                    </a>
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
