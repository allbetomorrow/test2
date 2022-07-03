module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": {
          "main": "#fff7ed",
          "sec": "#0f172a"
        },
        "dark": {
          "main": "#1e293b",
          "sec": "#fff7ed",
          "th": "#6d28d9",
        }
      },
      transitionProperty: {
        'darkMode': 'transform, opacity'
      }
    },
  },
  plugins: [],
}
