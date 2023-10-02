/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens : {
        'mlg' : "1072px",
      }
    },
  },
  plugins: [],
}