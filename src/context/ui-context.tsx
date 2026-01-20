import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type Lang = "en" | "de";
type Theme = "light" | "dark";

type UIContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const UIContext = createContext<UIContextValue | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "en");
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("theme") as Theme) || "light");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // ✅ key change: run before paint
  useLayoutEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      theme,
      toggleTheme: () =>
        setTheme((t) => {
          const next = t === "light" ? "dark" : "light";
          // ✅ instant DOM update (makes click feel immediate)
          applyTheme(next);
          localStorage.setItem("theme", next);
          return next;
        }),
    }),
    [lang, theme]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside UIProvider");
  return ctx;
}
