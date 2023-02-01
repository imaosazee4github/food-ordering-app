/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
   ],
   theme: {
     extend: {
      fontFamily:{
        sans: ['ClashDisplay-Regular', '...defaultTheme.fontFamily.sans']
      },
      colors: {
        tomato: '#E50914',
        marigold: '#ffbe0b',
      }
     },
   },
   plugins: [],
 }