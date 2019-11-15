
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'monitor.min.js',
    path: path.resolve(__dirname, '../lib'),
    library: 'Monitor',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../test')
        ]
      }
    ]
  }
}