import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

export default function Contact() {
  const { lang } = useUI();
  const t = strings[lang].contactSection;

  return (
    <section id="contact" className="py-16">
      <Container>
        <SectionHeading title={t.title} subtitle={t.subtitle} />

        <div
          className="rounded-2xl border border-slate-200 bg-white p-6
                     dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Email
              </p>
              <a
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                href="mailto:arvind061201@gmail.com"
              >
                arvind061201@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {t.locationLabel}
              </p>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Heidelberg, Germany
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                LinkedIn
              </p>
              <a
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                href="https://linkedin.com/in/arvind-n/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/arvind-n/
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                GitHub
              </p>
              <a
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                href="https://github.com/arvindnataraj06"
                target="_blank"
                rel="noreferrer"
              >
                github.com/arvindnataraj06
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
