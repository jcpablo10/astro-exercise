/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'sans': 'Open Sans',
      'serif': "Montserrat",
    },
    extend: {
      colors: {
        green: "#28CB8B",
        silver: "#F5F7FA",
        neutral: {
          black: "#263238",
          silver: "#F5F7FA",
          "grey-blue": "#ABBED1",
          grey: "#89939E",
          "d-grey": "#4D4D4D",
        },
        primary: {
          greee: "#28CB8B",
          black: "#263238",
          blue: "#2194f3",
        },
        action: {
          warning: "#FBC02D",
          error: "#E53835",
          success: "#2E7D31",
        }
      },
    },
  },
  plugins: [],
};