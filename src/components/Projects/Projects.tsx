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
        <SectionHeading
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((p) => (
            <div key={p.title} className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
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
                      className="text-sm font-semibold text-blue-600 hover:underline"
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
