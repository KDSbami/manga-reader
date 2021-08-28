module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        dark: {
          textColor: '#E8E8E8',
          200: '#969696',
          300: '#585757',
          primaryShade: '#1C1C1C',
        },
        light:{
          primaryShade: '#E8E8E8',
          300: '#969696',
          200: '#585757',
          textColor: '#1C1C1C',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
