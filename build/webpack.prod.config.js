const Merge = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')

module.exports = Merge(BaseConfig, {
  mode: 'production'
})