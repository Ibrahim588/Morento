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
        ivory: {
          DEFAULT: "#FAF7F2",
          50: "#FCFAF7",
          100: "#FAF7F2",
          200: "#F2EBE1",
          300: "#E8DDCF",
        },
        chocolate: {
          DEFAULT: "#38251F",
          50: "#8E5F50",
          100: "#5E3E34",
          800: "#38251F",
          900: "#241612",
          950: "#180E0B",
        },
        burgundy: {
          DEFAULT: "#762F3D",
          50: "#F5E9EB",
          100: "#E4B8C0",
          600: "#8C3748",
          700: "#762F3D",
          800: "#5C242F",
          900: "#3D171F",
        },
        gold: {
          DEFAULT: "#C5A46D",
          light: "#DFC59A",
          dark: "#A6844E",
          hover: "#B89458",
        },
        blush: {
          DEFAULT: "#EAD5D0",
          light: "#F7EFEB",
          dark: "#D4B3AB",
        },
      },
      fontFamily: {
        arabic: ["'IBM Plex Sans Arabic'", "'Tajawal'", "sans-serif"],
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "'Segoe UI'", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(56, 37, 31, 0.08)",
        "luxury-hover": "0 20px 40px -15px rgba(56, 37, 31, 0.15)",
        gold: "0 4px 20px -2px rgba(197, 164, 109, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

