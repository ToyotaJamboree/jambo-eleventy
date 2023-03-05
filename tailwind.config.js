const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{html,js,jsx,md,njk}'],
    safelist: [],
    theme: {
      extend: {
        colors: {
         
        },
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'), 
    ],
    darkMode: 'class',
  }

  