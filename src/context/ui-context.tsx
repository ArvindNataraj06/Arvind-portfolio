import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  useEffect,
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

  // ✅ Apply theme BEFORE paint (no lag / no flicker)
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
    applyTheme(next); // ✅ instant DOM update
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
