/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "rgb(17 24 39)",
        "purple-hover": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
