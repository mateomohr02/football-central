/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pf-blue": "#293851",
        "pf-grey": "#3e3f41",
        "pf-dark-grey": "#2d2e2e",
        "pf-white": "#d9d9d9",
      },
      width: {
        88: "23rem",
        176: "46rem",
      },
      fontFamily:{
        "main-font":["Geologica", "sans-serif"],
        "text-font":["Montserrat", "sans-serif"],
        "bebas-font":['Bebas Neue', "sans-serif"]
      },
      
    },
  },
  plugins: [],
};
