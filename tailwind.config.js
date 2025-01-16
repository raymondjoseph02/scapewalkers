/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        black_50: "#161616",
        black: "#020202",
        white_100: "#FFFFFF",
        white_50: "#bababa",
        light_gray: "#F2F1EE",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        xxl: "1.5rem",
        xxxl: "2rem",
      },
      fontFamily: {
        special: ["Clash Display", "Helvetica, Arial, sans-serif"],

      },
      backgroundImage: {
        clients: "url('./src/assets/images/jpg/ Bedroom.jpeg')",
        herobg: "url('./src/assets/images/jpg/3d_presentation.jpg')",
        aboutBg: "url('./src/assets/images/jpg/nice room.jpeg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
