/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { flex: { 4: "4 4 0%", 7: "7 7 0%" } },
  },
  plugins: [],
};
