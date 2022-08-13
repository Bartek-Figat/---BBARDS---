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
        desktop: { min: "900px", max: "1200px" },
      },
      gridTemplateColumns: {
        16: "repeat(2, minmax(30rem, 10rem))",
        14: "repeat(2, minmax(20rem, 30rem))",
        12: "repeat(auto-fit, minmax(20rem, 30rem))",
      },
      colors: {
        purple: "rgb(17 24 39)",
        "purple-hover": "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "hero-image": "url('assets/images/01.jpg')",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
