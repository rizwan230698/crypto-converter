module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#58ade3",
        darkblue: "#191b28",
        gray: {
          300: "#EAEAEA",
          50: "#f7f7f7",
        },
        philippineGray: "#8c8c8c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
