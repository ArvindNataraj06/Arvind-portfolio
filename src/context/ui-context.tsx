import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

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

  useEffect(() => {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    // apply on first load
    applyTheme(theme);
  }, []); // eslint-disable-line

  const value = useMemo(
    () => ({
      lang,
      setLang,
      theme,
      toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
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
