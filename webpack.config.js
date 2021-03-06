const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: [ 'babel-loader' ],
        exclude: [ /node_modules/ ]
      }
    ],
  },
  
  serve: {
    host: '0.0.0.0',
    port: 8080,
    content: path.join(__dirname, 'public')
  },
  
  plugins: [
  ]
}
