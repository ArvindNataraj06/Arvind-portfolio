import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/projects";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";
import clsx from "clsx";

function LinkIcon({ kind }: { kind?: "github" | "live" | "external" }) {
  const common = "h-4 w-4";
  if (kind === "github") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.26.79-.57v-2.1c-3.2.71-3.88-1.26-3.88-1.26-.52-1.35-1.28-1.71-1.28-1.71-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.71 1.28 3.37.98.1-.77.4-1.28.72-1.57-2.55-.3-5.23-1.31-5.23-5.83 0-1.29.45-2.34 1.18-3.16-.12-.3-.51-1.52.11-3.17 0 0 .96-.31 3.14 1.21.91-.26 1.88-.39 2.85-.39s1.94.13 2.85.39c2.18-1.52 3.14-1.21 3.14-1.21.62 1.65.23 2.87.11 3.17.73.82 1.18 1.87 1.18 3.16 0 4.53-2.69 5.53-5.26 5.83.42.37.78 1.09.78 2.21v3.27c0 .31.21.69.8.57 4.57-1.53 7.86-5.86 7.86-10.97C23.25 5.62 18.27.5 12 .5z" />
      </svg>
    );
  }
  // live/external
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function AccentHeader({
  accent = "slate",
  coverImage,
}: {
  accent?: "slate" | "blue" | "violet";
  coverImage?: string;
}) {
  const gradient =
    accent === "violet"
      ? "from-violet-600/90 to-fuchsia-600/80"
      : accent === "blue"
      ? "from-blue-600/90 to-cyan-500/80"
      : "from-slate-900/90 to-slate-700/80";

  return (
    <div
      className={clsx(
        "relative h-28 overflow-hidden rounded-t-2xl",
        "bg-gradient-to-r",
        gradient
      )}
    >
      {coverImage ? (
        <img
          src={coverImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="lazy"
        />
      ) : null}

      {/* top-right small action icons placeholder (like your screenshot) */}
      <div className="absolute right-3 top-3 flex gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <path d="M17 3h4v4" />
            <path d="M10 14L21 3" />
          </svg>
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 15l2-2 3 3 4-4" />
          </svg>
        </span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 3h7v7" />
            <path d="M10 14L21 3" />
            <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
          </svg>
        </span>
      </div>

      {/* subtle divider line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15" />
    </div>
  );
}

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
            <article
              key={p.title}
              className={clsx(
                "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
                "transition hover:-translate-y-0.5 hover:shadow-md",
                "dark:border-slate-800 dark:bg-slate-900"
              )}
            >
              <AccentHeader accent={p.accent} coverImage={p.coverImage} />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {p.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold tracking-wider text-slate-900 dark:text-slate-100">
                    KEY FEATURES
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-wider text-slate-900 dark:text-slate-100">
                    TECH STACK
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className={clsx(
                          "rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700",
                          "dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {p.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <LinkIcon kind={l.kind} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
