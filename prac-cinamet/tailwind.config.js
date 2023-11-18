/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens : {
        "other" : {"min" : "360px" , "max" : "580px"}
      }
    },
  },
  plugins: [],
}

