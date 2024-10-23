/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#22637E',
        'custom-black': '#141718',
        'custom-grey': '#6C7275',
        'custom-red': '#FF0000',
      },
    },
  },
  plugins: [],
};