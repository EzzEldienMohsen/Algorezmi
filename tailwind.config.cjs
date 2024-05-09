/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    
    fontFamily: {
  Nunito:["Nunito , sans-serif","sans-serif"]
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
