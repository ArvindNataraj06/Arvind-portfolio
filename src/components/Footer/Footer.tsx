import Container from "../ui/Container";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

export default function Footer() {
  const { lang } = useUI();
  const t = strings[lang].footer;

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-900 dark:text-slate-100">
            Arvind Nataraj
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t.roleLine}
          </p>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Arvind Nataraj. {t.copyright}
        </p>
      </Container>
    </footer>
  );
}
