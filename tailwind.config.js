module.exports = {
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}"]
    // These options are passed through directly to PurgeCSS
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
    }),
    extend: {
      gridTemplateColumns: {
       'cardHolder': 'repeat(auto-fill,minmax(256px, 1fr))',
      },
      maxWidth: {
        "640px":"640px",
        "448px":"448px"
      },
      height: {
        min:"min-content"
       },
      colors: {
        background: "var(--color-background)",
        "background-accent":"var(--color-background-accent)",
        foreground: "var(--color-foreground)",
        "foreground-shading":"var(--color-foreground-shading)",
        "foreground-accent": "var(--color-foreground-accent)",
        "background-50": "var(--color-background-50)",
        "foreground-50": "var(--color-foreground-50)",
        "background-25": "var(--color-background-25)",
        "foreground-25": "var(--color-foreground-25)",
        accent1: "var(--color-accent1)",
        accent2: "var(--color-accent2)",
        "accent1-50": "var(--color-accent1-50)",
        "accent2-50": "var(--color-accent2-50)",
        "accent1-25": "var(--color-accent1-25)",
        "accent2-25": "var(--color-accent2-25)",
        accentForeground: "var(--color-accentForeground)",
        common: {
          background: "#1C1C1C",
          foreground: "#E0E0E0",
        },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      borderRadius: {
        'card': '2rem',
      },
      boxShadow:{
        "lg-custom":"var(--shadow-custom)"
      },
      spacing: {
        "20px": "20px",
        "65px": "65px",
        "10px": "10px",
        "5px": "5px",
        "30px": "30px",
        "44px": "44px",
        "52px": "52px",
        "300px": "300px",
        "128px":"128px",
        "180px":"180px",
        "194px": "194px",
        "256px": "256px",
        "270px": "270px",
        "360px":"360px",
        "363px":"363px",
        "450px":"450px",
        "500px":"500px",
        "550px":"550px",
        "600px":"600px",
        "1440px": "1440px",
      },
      grayscale: {
        50: "50%",
        90:"90%",
        25:"25%"
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        max: "1440px",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ['hover'],
      display: ['hover'],
      height: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      placeholder: ['hover'],
    },
  },
  plugins: [],
};
