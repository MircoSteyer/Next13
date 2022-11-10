"use client";
import { Theme } from "@interfaces/theme.type";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface UseTheme {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    console.log("runs first", theme);
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme as Theme);
  }, []);

  const setThemeAndLocalStorage = (theme: Theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return { theme, setTheme: setThemeAndLocalStorage };
};
