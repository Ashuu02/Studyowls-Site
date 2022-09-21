/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      screens: {
        'tablet': "767px",
        // => @media (min-width: 640px) { ... }

        // 'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
        'laptop': "1200px",
        'desktop': "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 900,
        "extra-bold": 800,
        black: 1000,
      },
    },
  },
  plugins: [],
};
