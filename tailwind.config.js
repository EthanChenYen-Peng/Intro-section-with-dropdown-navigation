module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screen: {
      mobile: "375px",
      desktop: "1440px",
    },
    colors: {
      "almost-white": "hsl(0, 0%, 98%)",
      "medium-gray": "hsl(0, 0%, 41%)",
      "almost-black": "hsl(0, 0%, 8%)",
    },
    extend: {},
  },
  plugins: [],
};
