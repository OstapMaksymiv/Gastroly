/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",        // include your index.tsx and any other screens
    "./components/**/*.{js,jsx,ts,tsx}", // if you have reusable components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        black_pourple:'#4B3F72',
        green:'#417B5A',
        black_light:'#171717',
        light_pouple:'#695c93',
        blue:'#80b4c1',
        light_white:'#e1e1e1'
      }
    },
  },
  plugins: [],
};



