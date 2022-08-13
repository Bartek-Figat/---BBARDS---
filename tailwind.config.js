/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "550px" },
        // sm: { min: "550px", max: "767px" },
        tablet: { max: "640px" },
        laptop: { max: "1024px" },
        desktop: { max: "1200px" },
      },
      gridTemplateColumns: {
        16: "repeat(2, minmax(30rem, 20rem))",
        14: "repeat(auto-fit, minmax(40rem, 20rem))",
        12: "repeat(1, minmax(40rem, 20rem))",
      },
      colors: {
        purple: "rgb(17 24 39)",
        "purple-hover": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
