/**
 * Created on 07/03/2017.
 */

const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const hotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const devConfig = require('./webpack.config.dev.js');
const prodConfig = require('./webpack.config.prod.js');
const isProd = process.env.NODE_ENV === 'production';



const app = express();



const webpackDevOptions = {
  publicPath: devConfig.output.publicPath,
  historyApiFallback: true,
  stats: {
    chunks: false,
    colors: true,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

let compiler;

if(isProd)  {
  compiler = webpack(prodConfig);
  console.log("production mode...");
} else {
  compiler = webpack(devConfig);
  console.log("development mode...");
}

app.use(webpackDevMiddleware(compiler, webpackDevOptions));
app.use(hotMiddleware(compiler));

// 暂时使用本地数据
app.use(express.static(path.join(__dirname, 'db')));
app.use(express.static(path.join(__dirname, 'public')));


// 由于webpack-dev-server只是将文件打包在内存里，
// 所以在开发环境下,你没法express里直接sendfile('index.html')，因为这个文件实际上还不存在。
// 还好webpack提供了一个outputFileStream，用来输出其内存里的文件，我们可以利用它来做路由。
app.get('/', function (req, res) {
  let filepath = path.join(compiler.outputPath, 'index.html');

  // 使用webpack提供的outputFileSystem
  compiler.outputFileSystem.readFile(filepath, function(err, result) {
    if (err) {
      // something error
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
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
