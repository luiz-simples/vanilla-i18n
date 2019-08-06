const path = require('path')
const dist = path.join(__dirname, 'dist')
const main = path.join(__dirname, 'index.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  target: 'node',
  mode: 'production',

  entry: {
    main: main
  },

  output: {
    path: dist,
    filename: 'vanilla-i18n.js',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: false,
        parallel: false,
        sourceMap: true,

        terserOptions: {
          warnings: false,
          beautify: false,
          comments: false,
          sourceMap: false
        }
      })
    ]
  }
}
