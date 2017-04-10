/**
 * Created on 07/03/2017.
 */

let path = require('path');
let fs = require('fs');
let express = require('express');
let webpack = require('webpack');
let hotMiddleware = require('webpack-hot-middleware');
let webpackDevMiddleware = require('webpack-dev-middleware');
let config = require('./webpack.config.js');



let app = express();
let compiler = webpack(config);

let webpackDevOptions = {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    chunks: false,
    colors: true,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

app.use(webpackDevMiddleware(compiler, webpackDevOptions));
app.use(hotMiddleware(compiler));

//暂时使用本地数据
app.use(express.static(path.join(__dirname, 'db')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

let offset = 10;
app.get('/getArticle', function(req, res) {

  res.json({
    "id": `${offset+=1}`,
    "title": "setState 之后发生了什么 —— 浅谈 React 中的 Transaction",
    "description": "本文系对 深入理解 React 的 batchUpdate 机制 的更新，根据 React v0.14 版源码添加并修改了部分内容。同时增加了一张看起来并不容易理解的示意图。 之前在我的博客里有[...]",
    "date": "2015-10-25"
  })
});

app.listen(3009, '0.0.0.0', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server listening on port 3009...");
});
