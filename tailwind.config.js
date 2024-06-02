/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "Arial", "Sans-Serif"],
        Inter: ["Inter", "Arial", "Sans-Serif"],
      },
      backgroundImage: {
        hero: 'url("/raphael-elias.webp")',
      },
    },
  },
  plugins: [],
};
