module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        clouds: "url(/clouds.svg)",
      },
      colors: {
        "sky-blue-300": "rgb(169, 224, 255)",
        "sky-blue-500": "rgb(80, 162, 207)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "secular-one": ['"Secular One"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
