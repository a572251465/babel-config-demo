const path = require('path')

const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  entry: resolvePath('src/index.js'),
  mode: 'development',
  output: {
    path: resolvePath('dist'),
    filename: 'bandle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
