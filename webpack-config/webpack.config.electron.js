const validate = require('webpack-validator')
const path = require('path')
const formatter = require('eslint-formatter-pretty')
const webpack = require('webpack')

let config = {
  entry: './src/main.js',

  node: {
    __dirname: false,
    __filename: false
  },

  target: 'atom',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'main.js'
  },

  resolve: {
    root: path.join(__dirname, '../src'),
    extensions: ['', '.js', '.es6']
  },

  eslint: {
    formatter
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
}

module.exports = validate(config)
