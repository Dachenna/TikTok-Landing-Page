/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#4C214B',
        secondary: '#201C2D',
        accent: '#F0A500',
      },
     animation: {
      'spin-slow': 'spin 2s linear infinte',
      },
      fontFamily:{
        header: []
      }
    },


  },
  plugins: [],
}