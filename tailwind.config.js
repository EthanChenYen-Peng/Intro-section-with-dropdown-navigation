module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1440px",
    },
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "almost-white": "hsl(0, 0%, 98%)",
      "medium-gray": "hsl(0, 0%, 41%)",
      "almost-black": "hsl(0, 0%, 8%)",
    },
    extend: {},
  },
  plugins: [],
};
