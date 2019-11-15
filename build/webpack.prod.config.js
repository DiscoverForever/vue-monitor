const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'monitor.min.js',
    path: path.resolve(__dirname, '../lib')
  }
}