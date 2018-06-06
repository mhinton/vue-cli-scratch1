module.exports = {
  "plugins": [
    require("postcss-import")(),
    // to edit target browsers: use "browserslist" field in package.json
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer'),
  ]
}
