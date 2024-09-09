/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './{App,app}.{js,ts,vue}',
    './{Error,error}.{js,ts,vue}',
    './app.config.{js,ts}'
  ],
  theme: {
    theme: {
      container: {
        center: true,
        // padding: '2rem',
        screens: {
          sm: '100%',
          md: '768px',
          lg: '992px',
          xl: '1320px'
        }
      }
    },
    extend: {}
  },
  plugins: []
};
