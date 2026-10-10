import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#a63a50",
        'sidebar-text': "#ffffff",
        secondary: "#118ab2",
        body: "#000000",
        line: "#ffffff",
        accent: "#073b4c",
        content: "#f0e7d8 ",
        hover: "#118ab2"
      },
      fontFamily: {
        display: ["Helvetica"],
        body: ["Arial", "Helvetica", "sans-serif"],
        bitcount: ['"Bitcount Single"', "sans-serif"],

      },
      
    },
  },
  plugins: [],
};

export default config;

