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
          "main": "#0f172a",
          "sec": "#fff7ed",
        },
        "custom": {
          "main": "#6d28d9"
        }
      },
      transitionProperty: {
        'darkMode': 'transform, opacity'
      }
    },
  },
  plugins: [],
}
