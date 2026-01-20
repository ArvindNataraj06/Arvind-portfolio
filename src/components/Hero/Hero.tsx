import Container from "../ui/Container";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

export default function Hero() {
  const { lang } = useUI();
  const t = strings[lang].hero;

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* soft background */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-white
                   dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      />

      {/* glow */}
      <div
        className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-60
                   dark:bg-blue-500/10"
      />

      <Container className="relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        {/* Left */}
        <div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {t.greeting}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Arvind <span className="text-blue-600 dark:text-blue-400">Nataraj</span>
          </h1>

          <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-200">
            {t.role}
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            {t.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm
                         hover:bg-blue-700"
            >
              {t.ctaPrimary}
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900
                         hover:bg-slate-50
                         dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-blue-200/40 blur-xl dark:bg-blue-500/10" />

            <div
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg
                         dark:border-slate-800 dark:bg-slate-900"
            >
              <img
                src="/image.png"
                alt="Arvind Nataraj"
                className="h-[320px] w-[280px] object-cover sm:h-[380px] sm:w-[320px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
