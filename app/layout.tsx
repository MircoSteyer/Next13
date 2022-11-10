"use client";

import "./globals.css";
import { Header } from "../components/layout/Header";
import { useTheme } from "../hooks/useTheme";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  // noinspection HtmlRequiredTitleElement
  return (
    <html className={theme} lang="en">
      <head />
      <body>
        <Header theme={theme} setTheme={setTheme} />
        {children}
      </body>
    </html>
  );
}
