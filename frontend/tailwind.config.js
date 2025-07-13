import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       default: ['monospace', 'sans-serif'],
        english: ['Roboto', 'sans-serif'],
        hindi: ['Poppins', 'sans-serif'],
        arabic: ['Rubik', 'sans-serif'],
        chinese: ['Noto Sans SC', 'sans-serif'],
        spanish: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest","aqua"],
  },
};
