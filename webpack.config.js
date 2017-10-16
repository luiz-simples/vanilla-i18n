const path = require('path')
const webpack = require('webpack')
const dist = path.join(__dirname, 'dist')
const main = path.join(__dirname, 'index.js')

module.exports = {
  devtool: 'cheap-module-source-map',
  target: 'web',

  entry: {main: main},

  output: {
    path: dist,
    filename: 'vanilla-i18n.js'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{loader: 'babel-loader'}]
    }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      sourceMap: true,
      compress: {warnings: false},
      output: {comments: false}
    })
  ]
}
