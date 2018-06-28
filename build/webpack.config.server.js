const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  externals: Object.keys(require('../package.json').dependencies),
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  }
})

// module.exports = {
//   target: 'node',
//   entry: {
//     app: path.join(__dirname, '../client/server-entry.js')
//   },
//   output: {
//     filename: 'server-entry.js',
//     path: path.join(__dirname, '../dist'),
//     publicPath: '/public/',
//     libraryTarget: 'commonjs2'
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
//   }
// }
