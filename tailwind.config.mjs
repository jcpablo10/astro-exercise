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
      },
    },
  },
  plugins: [],
};