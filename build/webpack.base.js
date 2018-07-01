const path = require('path')
const resolve = file => path.resolve(__dirname, file)
// const paths = require('./paths')
module.exports = {
  devtool: '#source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  resolve: {
    alias: {
      src: resolve('../client'),
      util: resolve('../client/util'),
      views: resolve('../client/views'),
      assets: resolve('../client/assets'),
      actions: resolve('../client/actions'),
      config: resolve('../config'),
      common: resolve('../client/common'),
      components: resolve('../client/components'),
      '@': resolve('client')
    },
    modules: ['../client', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../client/middleware'),
          path.resolve(__dirname, '../client/actions/index.js')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  }
}
