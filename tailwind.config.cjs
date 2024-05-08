/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    theme: {
    fontFamily: {
  Nunito:["Nunito","sans-serif"]
    }}
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};