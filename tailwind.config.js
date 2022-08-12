/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "550px" },
      },
      gridTemplateColumns: {
        16: "repeat(2, minmax(30rem, 1fr))",
        14: "repeat(1, minmax(30rem, 1fr))",
      },
      colors: {
        purple: "rgb(17 24 39)",
        "purple-hover": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
