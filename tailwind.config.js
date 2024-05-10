/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#475be8',
        'secondary': '#F2F2F2',
        'text': '#676767',
      }
    },
  },
  plugins: [],
};