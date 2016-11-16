const baseConfig = require('./webpack.config.electron')
const webpack = require('webpack')
const validate = require('webpack-validator')
const merge = require('webpack-merge')

let config = merge(baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
})

module.exports = validate(config)
