const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const isDev = process.env.NODE_ENV === 'development'
const webpackMerge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')
const configs = require('../config')

const config = webpackMerge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
})

// const config = {
//   entry: {
//     app: path.join(__dirname, '../client/app.js')
//   },
//   output: {
//     filename: '[name].[hash].js',
//     path: path.join(__dirname, '../dist'),
//     publicPath: '/public/'
//   },
//   module: {
//     rules: [
//       {
//         test: /.jsx$/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /.js$/,
//         loader: 'babel-loader',
//         exclude: [
//           path.join(__dirname, '../node_modules')
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HTMLPlugin({
//       template: path.join(__dirname, '../client/template.html')
//     })
//   ]
// }

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    // 显示黑色的弹窗
    overlay: {
      error: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
    proxy: {
      // '/v1/**': 'http://api.shudong.wang/v1',
      '/v1': {
        target: configs.baseUrl,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/api'
        // }
      }
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
