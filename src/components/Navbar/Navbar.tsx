import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import Container from "../ui/Container";
import { useUI } from "../../context/ui-context";
import { strings } from "../../i18n/strings";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

type NavItem = { label: string; href: string };

function getActiveSection(ids: string[]) {
  const scrollY = window.scrollY;
  const offset = 120; // accounts for sticky navbar height

  let active = ids[0] ?? "hero";

  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;

    const top = el.getBoundingClientRect().top + scrollY - offset;
    if (scrollY >= top) active = id;
  }
  return active;
}

export default function Navbar() {
  const { lang, setLang, theme, toggleTheme } = useUI();
  const t = strings[lang].nav;

  const NAV: NavItem[] = [
    { label: t.about, href: "#about" },
    { label: t.experience, href: "#experience" },
    { label: t.skills, href: "#skills" },
    { label: t.projects, href: "#projects" },
    // { label: t.contact, href: "#contact" },
  ];

  const sectionIds = useMemo(
    () => ["hero", "about", "experience", "skills", "projects", "contact"],
    []
  );

  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(getActiveSection(sectionIds));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false);
  };

const email = "arvind061201@gmail.com.com"; // change
const githubUrl = "https://github.com/arvindnataraj06"; // change
const linkedinUrl = "https://www.linkedin.com/in/arvind-nataraj-3b4b72320/"; // change


  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur
                 dark:border-slate-800 dark:bg-slate-950/70"
    >
      <Container className="flex h-16 items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100"
          aria-label="Go to top"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
            A
          </span>
          <span>Arvind Nataraj</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={clsx(
                  "text-sm font-medium transition",
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                )}
              >
                {item.label}
              </button>
            );
          })}

          <button
            onClick={() => scrollTo("#contact")}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            {t.connect}
          </button>
        </nav>

        {/* Right controls */}

        <div className="flex items-center gap-2">
  {/* Email */}
  <a
    href={`mailto:${email}`}
    aria-label="Email"
    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
  >
    <FiMail className="h-5 w-5" />
  </a>

  {/* GitHub */}
  <a
    href={githubUrl}
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
  >
    <FaGithub className="h-5 w-5" />
  </a>

  {/* LinkedIn */}
  <a
    href={linkedinUrl}
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
  >
    <FaLinkedinIn className="h-5 w-5" />
  </a>

  {/* Theme toggle (updated style) */}
  <button
    type="button"
    onClick={toggleTheme}
    aria-label="Toggle theme"
    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
  >
    {theme === "dark" ? (
      <HiOutlineSun className="h-5 w-5" />
    ) : (
      <HiOutlineMoon className="h-5 w-5" />
    )}
  </button>
</div>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
            <button
              onClick={() => setLang("en")}
              className={clsx(
                "rounded-md px-2 py-1 text-xs font-semibold transition",
                lang === "en"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              )}
            >
              EN
            </button>
            <button
              onClick={() => setLang("de")}
              className={clsx(
                "rounded-md px-2 py-1 text-xs font-semibold transition",
                lang === "de"
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              )}
            >
              DE
            </button>
          </div>

          {/* Theme toggle */}
          {/* <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50
                       dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button> */}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50
                       dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-label={t.menu}
          >
            {t.menu}
          </button>
        </div>
      </Container>

      {/* Mobile dropdown */}
      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950">
          <Container className="py-3">
            <div className="flex flex-col gap-2">
              {NAV.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = active === id;

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className={clsx(
                      "rounded-lg px-3 py-2 text-left text-sm font-medium transition",
                      isActive
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                        : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => scrollTo("#contact")}
                className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {t.connect}
              </button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
