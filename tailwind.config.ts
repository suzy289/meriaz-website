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
          navy: "#0F1D40",
          ocean: "#1565C0",
          sky: "#5DAEFF",
          ice: "#F5F8FF",
          slate: "#4A5975",
          mint: "#12B3B3",
          sunrise: "#FFC15E"
        }
      },
      boxShadow: {
        "soft-lg": "0 18px 50px rgba(15, 29, 64, 0.12)",
        "soft-xl": "0 30px 120px rgba(15, 29, 64, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

