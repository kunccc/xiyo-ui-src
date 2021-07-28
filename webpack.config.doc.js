const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  entry: {
    example: './index.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'xiyo-ui',
      template: 'index.html'
    })
  ],
})