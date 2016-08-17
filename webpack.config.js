var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  "./client_side/app/main.ts",
 
  output: {
    path:'./dist',
    filename: 'app.bundle.js'
  },
  
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,

        loaders: ['ts-loader']
      
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './client_side/index.html'
      })
    
  ]
}