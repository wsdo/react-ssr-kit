const webpack = require('webpack');
const path = require('path');
module.exports = {
  context: path.resolve(__dirname, './lib'),
  entry: {
    widget: './indexall.js'
  },
  output: {
    library: 'HWidget',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  externals: {
    io: 'io',
    hjsdk: 'HJSDK'
  },
  target: 'node'
}
