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
          accentForeground:'#0D0D0D'
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
        'opensans': ['"Open Sans"', 'sans-serif']
      },
      spacing: {
        '20px': '20px',
        '65px': '65px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
