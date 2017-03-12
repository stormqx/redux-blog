/**
 * Created on 07/03/2017.
 */

var path = require('path');
var fs = require('fs');
var express = require('express');
var webpack = require('webpack');
var hotMiddleware = require('webpack-hot-middleware');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');



var app = express();
var compiler = webpack(config);

var webpackDevOptions = {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    chunks: false,
    colors: true,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}

app.use(webpackDevMiddleware(compiler, webpackDevOptions));
app.use(hotMiddleware(compiler));

//暂时使用本地数据
app.use(express.static(path.join(__dirname, 'db')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3009, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server listening on port 3009...");
});
