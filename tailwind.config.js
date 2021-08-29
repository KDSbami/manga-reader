module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        accent1: "var(--color-accent)",
        accent2: "var(--color-accent2)",
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
        "1440px": "1440px",
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
    extend: {},
  },
  plugins: [],
};
