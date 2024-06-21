/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D31EDFF",
          100: "#F5F1FEFF",
          150: "#E4D9FCFF",
          200: "#D3C1FA73",
          500: "#6D31EDFF",
          700: "#4F23A3FF",
          800: "#391C74FF",
        },
        gray: {
          DEFAULT: "#6c757d",
          50: "#f8f9fa",
          100: "#ced4da",
          200: "#adb5bd",
          300: "#6c757d",
          400: "#495057",
          500: "#343a40",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        white: {
          DEFAULT: "#fff",
          100: "#f8f9fa",
          200: "#f1f3f5",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
