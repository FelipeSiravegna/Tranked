/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violeta': '#4A3583',
        'fondo': '#E4E5F1'
      }
    },
  },
  plugins: [],
}

