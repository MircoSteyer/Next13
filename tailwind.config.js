/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: [
          "Menlo",
          "Monaco",
          "Lucida Console",
          "Liberation Mono",
          "DejaVu Sans Mono",
          "monospace",
        ],
      },
      colors: {
        "next-blue": "#0070f3",
        "next-border": "#eaeaea",
        "next-code": "#fafafa",
        "next-dark-background": "#1F1F1F",
        "next-dark-header": "#111111",
        "next-dark-code": "#333333",
        "next-dark-text": "#fafafa",
      },
    },
  },
  plugins: [],
};
