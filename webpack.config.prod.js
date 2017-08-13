/**
 * Created on 21/04/2017.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');


module.exports = {
  resolve: {
    // Tell webpack what directories should be searched when resolving modules.
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  entry: path.resolve(__dirname, 'src/client'),
  target: 'web',
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[chunkhash].js',
    publicPath: '/build',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
        }],
        include: path.join(__dirname, 'src'),
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
    ] },

  plugins: [
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),

    // Minify and optimize the index.tpl.html
    new HtmlWebpackPlugin({
      template: './public/index.tpl.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
    }),

  ],

};
