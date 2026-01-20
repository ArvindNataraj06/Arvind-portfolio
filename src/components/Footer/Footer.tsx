import Container from "../ui/Container";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

export default function Footer() {
  const { lang } = useUI();
  const t = strings[lang].footer;

  return (
    <footer className="border-t border-slate-200 py-6 dark:border-slate-800">
      <Container className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left */}
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-slate-800 dark:text-slate-200">
            Arvind Nataraj
          </span>
          . {t.madeWith}{" "}
          <span className="text-red-500">❤</span>{" "}
          {t.withTech}
        </p>

        {/* Right */}
        <p className="text-slate-600 dark:text-slate-400">
          <span className="font-medium text-slate-800 dark:text-slate-200">
            {t.role}
          </span>
          {" · "}
          {t.stack}
          {" · "}
          {t.status}
        </p>

      </Container>
    </footer>
  );
}
