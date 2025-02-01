/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        color:{
          primary: "#FFC107"
        }
      },
    },
    plugins: [daisyui],
  }