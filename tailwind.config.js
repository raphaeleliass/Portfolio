/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#151515",
        customGreen: "#4EE1A0",
        customGrey: "#D9D9D9",
        customDarkGrey: "#242424",
        customWhite: "#FFFFFF",
      },
      fontFamily: {
        Poppins: ["Poppins", "Arial", "Sans-Serif"],
      },
      backgroundImage: {
        hero: 'url("/raphael-elias.webp")',
      },
    },
  },
  plugins: [],
};
