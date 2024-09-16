/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "system-ui"],
    },
    fontSize: {
      h1: "48px",
      h2: "36px",
      h3: "24px",
      body: "18px",
    },
  },
  plugins: [],
};
