const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: '[name]-[hash:6].js'
  },
  plugins: [
    new CleanWebpackPlugin('docs'),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    })
  ]
}
