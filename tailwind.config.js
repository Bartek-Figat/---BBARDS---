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
        32: "repeat(auto-fit, minmax(25rem, 25rem))",
        30: "repeat(2, minmax(20rem, 15rem))",
        28: "repeat(3, minmax(15rem, 20rem))",
        26: "repeat(4, minmax(15rem, 15rem))",
        24: "repeat(1, minmax(15rem, 20rem))",
        22: "repeat(2, minmax(15rem, 20rem))",
        18: "repeat(4, minmax(15rem, 15rem))",
        16: "repeat(2, minmax(30rem, 10rem))",
        14: "repeat(2, minmax(20rem, 30rem))",
        12: "repeat(auto-fit, minmax(20rem, 30rem))",
      },
      colors: {
        purple: "rgb(17 24 39)",
        "purple-hover": "rgba(255, 255, 255, 0.1)",
        "dark-blue": "#0044bb",
        "dark-blue-hover": "#0022aa",
        "gray-dark": "#777777",
        "gray-chalk": "#f5f5f5",
        "gray-mercury": "#e8e8e8",
        "cold-gray": "#575656",
        "black-heading": "#232d3b",
      },
      backgroundImage: {
        "hero-image": "url('assets/images/01.jpg')",
        "los-angeles": "url('assets/images/cities/01.jpg')",
        "san-francisco": "url('assets/images/cities/02.jpg')",
        california: "url('assets/images/cities/03.jpg')",
        "new-york": "url('assets/images/cities/04.jpg')",
        manhattan: "url('assets/images/cities/05.jpg')",
        baltimore: "url('assets/images/cities/06.jpg')",
        "low-poly": "url('assets/images/bg/03.jpg')",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
