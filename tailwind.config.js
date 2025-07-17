/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        bkColor: '#2f2f2f',
        activeBg: '#000',
        hvColor: '#222'
      },
      textColor:{
        txtColor: '#ddd'
      }
    },
  },
  plugins: [],
}