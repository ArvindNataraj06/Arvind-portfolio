import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import Container from "../ui/Container";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 font-semibold"
          aria-label="Go to top"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
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
                  isActive ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
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
            Connect
          </button>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden rounded-lg border border-slate-200 px-3 py-2 text-sm"
          onClick={() => setMobileOpen((s) => !s)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
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
                      "rounded-lg px-3 py-2 text-left text-sm font-medium",
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50"
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
                Connect
              </button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
