/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "max-lg":{max:"1100px"},
        "max-md":{max:"900px"},
        "max-belowMd":{max:"700px"},
        "max-small":{max:"500px"},
        "max-belowSmall":{max:"400px"},
      }
    },
  },
  plugins: [],
}