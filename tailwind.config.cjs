/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.svelte'],
}
