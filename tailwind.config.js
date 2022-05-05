module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '1440px',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      'almost-white': 'hsl(0, 0%, 98%)',
      'medium-gray': 'hsl(0, 0%, 41%)',
      'almost-black': 'hsl(0, 0%, 8%)',
    },
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(5px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
