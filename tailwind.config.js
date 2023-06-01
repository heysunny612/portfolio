/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ['Kanit'],
      },
      colors: {
        primary: '#00000',
        accent: '#FF0060',
      },
      backgroundImage: {
        bg: 'url("/public/assets/bg_img.jpg")',
        services: 'url("/public/assets/coder.jpg")',
        about: 'url("/public/assets/about.jpg")',
      },
    },
  },
  plugins: [],
};
