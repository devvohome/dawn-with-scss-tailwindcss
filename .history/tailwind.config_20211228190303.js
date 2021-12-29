module.exports = {
  purge:{
    enabled: true,
    content: [
      "./sections/*.liquid",
      "./layout/*.liquid",
      "./templates/*.liquid",
      "./snippets/*.liquid",
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
