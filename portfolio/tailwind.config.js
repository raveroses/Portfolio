/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kumbh Sans"', "sans-serif"],
      },
      gridTemplateColumns: {
        3: "repeat(3, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
