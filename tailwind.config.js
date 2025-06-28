/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#374151", // gray (gary-700 Tailwind)
      },
    },
  },
  plugins: [],
};
