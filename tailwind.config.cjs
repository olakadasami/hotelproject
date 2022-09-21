/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      garamond: ['EB Garamond', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        light: "#fff",
        primary: "#E5E5E5",
        secondary: "#14274A",
        accent: "#E0B973",
      },
    },
  },
  plugins: [],
}