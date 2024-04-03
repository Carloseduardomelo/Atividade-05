/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url('/Ellipse 1.png')"
      },
      fontFamily: {
        "fontProjeto": "Figtree"
      }
    },
  },
  plugins: [],
}

