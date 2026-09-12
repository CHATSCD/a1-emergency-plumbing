/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // High-visibility safety red
          red: '#D91F26',
          redDark: '#B3161C',
          // Navy blue
          navy: '#0A1F44',
          navyLight: '#12305A',
          navyDeep: '#061530',
        },
      },
      fontFamily: {
        // System stack = zero font requests, instant text paint on mobile.
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'ping-slow': 'ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
