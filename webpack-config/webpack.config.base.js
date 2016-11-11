const webpack = require('webpack')
const validate = require('webpack-validator')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const formatter = require('eslint-formatter-pretty')

let config = {
  entry: [
    './src/index.es6'
  ],

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    root: path.join(__dirname, '..', 'src'),
    extensions: ['', '.js', '.jsx', '.es6', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },

  eslint: {
    formatter
  },

  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-object-rest-spread', 'transform-runtime']
        }
      },
      {
        // if Vue can not be compiled correct, remember that config your .babelrc or package.json
        // Important when your vue loader can not resolve the js code in vue files
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, '../index.html')
    })
  ]
}

module.exports = validate(config)
