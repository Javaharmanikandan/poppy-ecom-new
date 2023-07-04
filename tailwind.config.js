/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  prefix:'tw-',
  theme: {
    extend: {},
  },
  corePlugins:{
    preflight:false,
  },
  plugins: [],
}
