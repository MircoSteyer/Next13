import Link from "next/link";
import React from "react";
import { Theme } from "@interfaces/theme.type";

export interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="bg-white dark:bg-next-dark-header rounded shadow-lg py-5 px-7">
      <nav className="flex justify-between">
        <Link href="/">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <img
              className="cursor-pointer dark:bg-next-dark-header dark:fill-next-blue p-1"
              src={`/vercel_${theme}.svg`}
              alt={`${theme} mode`}
            />
            <h2 className="font-normal text-2xl leading-6 text-gray-800 dark:text-white">
              Learn Next13
            </h2>
          </div>
        </Link>

        <div className="flex space-x-5 justify-center items-center pl-2">
          <div
            onClick={toggleTheme}
            className="dark:bg-white rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            <img
              className="w-8 h-8 dark:bg-next-dark-header"
              src={`/${theme}_mode.svg`}
              alt={`${theme} mode`}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
