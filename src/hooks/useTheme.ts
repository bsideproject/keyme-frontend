import { useCallback, useEffect, useState } from "react";

const useThemes = (): [typeof theme, typeof toggleTheme] => {
  const getInitialTheme = useCallback(() => {
    let theme = localStorage.getItem("theme") as "light" | "dark" | null;

    // const INVALID_THEME = theme !== 'light' && theme !== 'dark';

    if (!theme) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      theme = matches ? "dark" : "light";
    }

    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useThemes;
