const webpack = require('webpack')
const validate = require('webpack-validator')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const formatter = require('eslint-formatter-pretty')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.jpg$/i,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, '../index.html')
    }),
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = validate(config)
