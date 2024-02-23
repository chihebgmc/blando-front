/** @type {import('tailwindcss').Config} */
import inter from './node_modules/tailwindcss-font-inter/inter.json';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '8px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
  plugins: [inter],
};
