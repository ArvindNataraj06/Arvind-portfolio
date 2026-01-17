import Container from "../ui/Container";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";

export default function Footer() {
  const { lang } = useUI();
  const t = strings[lang].footer;

  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Arvind Nataraj</p>
          <p className="text-sm text-slate-600">
            {t.roleLine}
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Arvind Nataraj. {t.copyright}
        </p>
      </Container>
    </footer>
  );
}
