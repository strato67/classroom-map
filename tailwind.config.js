/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: {},
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
};
