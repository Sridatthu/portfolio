"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

export const useThemeTransition = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(
    (newTheme?: "light" | "dark") => {
      const targetTheme = newTheme || (theme === "dark" ? "light" : "dark");

      // Check if ViewTransition API is supported
      if (!document.startViewTransition) {
        setTheme(targetTheme);
        return;
      }

      // Start the view transition
      document.startViewTransition(() => {
        setTheme(targetTheme);
      });
    },
    [theme, setTheme]
  );

  return { theme, toggleTheme };
};
