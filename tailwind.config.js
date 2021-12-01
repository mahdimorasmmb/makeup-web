module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: "Roboto, sans-serif",
        krona: "Krona one, sans-serif",
      },
      colors: {
        dark: "#0C080B",
        green: "#1E3329",
        yellow: "#FFD470",
        "dark-grey": "#B8B8B8",
        "light-grey": "#ECECEC",
        light: "#FAFAFA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
