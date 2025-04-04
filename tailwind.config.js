/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "whiteSmoke": "#f5f5f5",
        "thumbnailText": "#0F0F0F",
      }
    },
  },
  plugins: [],
}

