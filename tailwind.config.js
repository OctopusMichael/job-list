/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCyan: "#5ba4a4",
        lightCyan: " #f0fafb",
      },
    },
  },
  plugins: [],
};
