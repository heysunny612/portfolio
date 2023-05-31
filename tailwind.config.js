/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
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
