import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/about";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

function Icon({ type }: { type: string }) {
  // simple inline icons (no dependency)
  const base = "h-5 w-5 text-blue-600";
  if (type === "code")
    return (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
      </svg>
    );
  if (type === "db")
    return (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    );
  if (type === "ux")
    return (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 7h16" />
        <path d="M4 12h10" />
        <path d="M4 17h16" />
      </svg>
    );
  // spark
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l1.5 6L20 10l-6.5 2L12 18l-1.5-6L4 10l6.5-2L12 2z" />
    </svg>
  );
}

export default function About() {
  const { lang } = useUI();
  const t = strings[lang];
  const content = about[lang];

  
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
  title={t.aboutTitle}
  subtitle={t.aboutSubtitle}
/>


        <div className="grid gap-10 md:grid-cols-2">
          {/* Left content */}
          <div>
            <p className="max-w-xl leading-7 text-slate-600">
              {content.intro}
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm italic text-slate-700">“{content.quote}”</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={content.resumeUrl}
                download
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                {t.downloadResume}

                

              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {t.contact}

              </a>
            </div>

            {/* Education */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-slate-900">{t.education}</h3>
              <div className="mt-3 space-y-3">
                {content.education.map((e) => (
                  <div
                    key={e.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {e.title}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{e.org}</div>
                    <div className="mt-1 text-xs text-slate-500">{e.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {content.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <Icon type={h.icon} />
                  <h4 className="text-sm font-semibold text-slate-900">
                    {h.title}
                  </h4>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
