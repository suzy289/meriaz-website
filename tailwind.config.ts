import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem"
      },
      colors: {
        brand: {
          purple: "#8854FF",
          orange: "#FF6B2C",
          blue: "#1A73E8"
        }
      }
    }
  },
  plugins: []
};

export default config;

