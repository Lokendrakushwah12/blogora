"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="rounded-full bg-transparent p-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="text-neutral-200" />
      ) : (
        <Sun className="text-neutral-900" />
      )}
    </button>
  );
}
