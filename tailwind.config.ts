import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      keyframes: {
        infinitSlide: {
          from: { transform: "translatex(0%)" },
          to: { transform: "translatex(-100%)" },
        },
      },
      animation: {
        infinitSlide: "infinitSlide 20s linear infinite",
      },
    },
  },
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  daisyui: {
    themes: false,
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
} satisfies Config;

export default config;
