const path = require('path')

const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  mode: 'development',
  entry: resolvePath('./src/index.js'),
  output: {
    path: resolvePath('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
