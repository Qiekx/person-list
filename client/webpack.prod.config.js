//打包时的配置文件，就是webpack的配置

var path = require('path');
// var webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "./build/"
  },
  devtool:'eval',
  resolve:{
    extensions:["",".js",".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/, loader: "babel-loader"
      },
      {
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader'
      }
    ]
  }
}
