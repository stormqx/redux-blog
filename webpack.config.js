/**
 * Created on 07/03/2017.
 */
let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'whatwg-fetch',
      'webpack-hot-middleware/client',
      './src/app',
      './src/resources/index.less',
    ],
    // vender: ['react', 'react-dom', 'react-router'],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].bundle.js',
    publicPath: '/build',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css'],
  },

  plugins: [
    new ExtractTextPlugin("[name].bundle.css"),
    new webpack.HotModuleReplacementPlugin(),
  ],
};