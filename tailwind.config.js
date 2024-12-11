/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React components
    "./public/index.html",        // HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Adding the Roboto font
      },
      colors: {
        'deep-navy': '#003366',   // Deep Navy
        'soft-gold': '#D4AF37',   // Soft Gold
        'light-gray': '#D3D3D3',  // Light Gray
      },
    },
  },
  plugins: [],
};
