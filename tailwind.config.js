/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        fog: {
          900: "#0d1117",
          800: "#161b22",
          700: "#1a1f35",
          600: "#252a45",
          500: "#3a4165",
        },
        silver: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#c0c0c0",
        },
        gold: {
          400: "#d4af37",
          500: "#f4d03f",
        },
      },
      fontFamily: {
        sans: ["Noto Serif SC", "Georgia", "serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
