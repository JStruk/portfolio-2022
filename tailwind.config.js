module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
