/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raf-blue': '#5D8AA8',
        'typhoon-gray': '#6B7280',
        'deep-navy': '#1E3A8A',
        'light-gray': '#F3F4F6',
      },
    },
  },
  plugins: [],
}
