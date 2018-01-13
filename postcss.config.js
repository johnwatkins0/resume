const postcssImport = require('postcss-import');
const colorFunction = require('postcss-color-function');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport,
    colorFunction,
    autoprefixer,
    cssnano,
  ],
};