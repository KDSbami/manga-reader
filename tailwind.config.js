module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
    }),
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
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
      spacing: {
        "20px": "20px",
        "65px": "65px",
        "10px": "10px",
        "5px": "5px",
        "30px": "30px",
        "250px": "250px",
        "1440px": "1440px",
      },
      grayscale: {
        50: "50%",
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
    },
  },
  plugins: [],
};
