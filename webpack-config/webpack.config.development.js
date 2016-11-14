const webpack = require('webpack')
const merge = require('webpack-merge')
const validate = require('webpack-validator')
const baseConfig = require('./webpack.config.base')

let config = merge(baseConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})

module.exports = validate(config)
