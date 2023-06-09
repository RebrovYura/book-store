/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: '#FFFFFF',
        accent: '#F8640A',
        text: '#363636',
        menu: '#F9F9FA',
        label: '#A7A7A7',
      },
      boxShadow: {
        'blockShadow': '0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18), 0px 1px 5px rgba(191, 196, 201, 0.24)'
      }
    },
  },
  plugins: [],
}