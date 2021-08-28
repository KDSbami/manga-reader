module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#111110',
          foreground: '#FCFCFC',
          accent1: '#F20587',
          accent2: '#7326BF',
          accentForeground:'#FCFCFC'
        },
        light: {
          background: '#FCFCFC',
          foreground: '#111110',
          accent1: '#3E01FF',
          accent2: '#1B0273',
          accentForeground:'#0D0D0D'
        },
        common: {
          background:'#1C1C1C',
          foreground:'#E0E0E0'
        }
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif']
      },
      spacing: {
        '20px': '20px',
        '65px': '65px',
        '10px': '10px',
        '5px': '5px',
        '30px': '30px',
        '1440px':'1440px'
      },
      screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'max':'1440px'
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
