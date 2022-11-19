/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#94959A',
        'greyHover': '#afafb3',
        'darkBlue': '#120D26',
        'darkBlue2': '#29253C',
        'orange': '#FF7058',
        'orangeHover': '#f97d69',
        'pink': 'rgba(255, 112, 88, 0.05)',
      },
      container: {
        center: true,
      },
      boxShadow: {
        'pinkShadow': '0px 10px 55px rgb(241 102 24 / 15%)'
      }
    },
  },
  plugins: [],
}
