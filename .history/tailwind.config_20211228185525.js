module.exports = {
  purge:{
    enabled: true,
    content: [
      "./sections/*.liquid",
      "./layout/*.liquid",
      "./templates/*.liquid",
      "./snipp/*.liquid",
    ],
  }
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
}
