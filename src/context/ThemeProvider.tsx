"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (
      localTheme === "dark" &&
      !document.getElementsByTagName("html")[0].classList.contains("dark")
    ) {
      toggleTheme();
    }
  }, []);
  const toggleTheme = () => {
    console.log("Theme Toggled");
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
    if (newTheme === "dark") {
      document.documentElement.setAttribute("dark", "");
    } else {
      document.documentElement.removeAttribute("dark");
    }
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
