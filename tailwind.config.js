module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'roboto':['Roboto']
    },
    extend: {
      padding:{
        '13':'3.25rem',
      },
      width:{
        '1140':'1140px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
