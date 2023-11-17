/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },

    colors: {
      primary: {
        100: "#0085ff",
        200: "#69b4ff",
        300: "#e0ffff",
      },
      accent: {
        100: "#006fff",
        200: "#e1ffff",
      },
      "light": {
        100: "#FFFFFF",
        200: "#f5f5f5",
        300: "#cccccc",
      },
      "dark": {
        100: "#1E1E1E",
        200: "#2d2d2d",
        300: "#454545",
      },
      "white-tx": {
        100: "#FFFFFF",
        200: "#9e9e9e",
      },
      "black-tx": {
        100: "#333333",
        200: "#5c5c5c",
      },
    },
  },
  plugins: [],
};