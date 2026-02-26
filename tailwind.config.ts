import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4E7D3",
        foreground: "#171717",
        sandalwood: "#8B5A2B",
        maroon: "#7B1E1E",
        gold: "#C6A75E",
      },
      fontFamily: {
        hindi: ["var(--font-noto-serif-devanagari)"],
        english: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
};
export default config;

