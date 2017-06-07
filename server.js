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
const config = require('./config');

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

if (isProd) {
  compiler = webpack(prodConfig);
  console.log('production mode...');
} else {
  compiler = webpack(devConfig);
  console.log('development mode...');
}

app.use(webpackDevMiddleware(compiler, webpackDevOptions));
app.use(hotMiddleware(compiler));

// 暂时使用本地数据
app.use(express.static(path.join(__dirname, 'db')));
app.use(express.static(path.join(__dirname, 'public')));


// 由于webpack-dev-server只是将文件打包在内存里，
// 所以在开发环境下,你没法express里直接sendfile('index.html')，因为这个文件实际上还不存在。
// 还好webpack提供了一个outputFileStream，用来输出其内存里的文件，我们可以利用它来做路由。
app.get('/', (req, res) => {
  const filepath = path.join(compiler.outputPath, 'index.html');

  // 使用webpack提供的outputFileSystem
  compiler.outputFileSystem.readFile(filepath, (err, result, next) => {
    if (err) {
      // something error
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.get('/articles', (req, res) => {
  fs.readFile(path.join(__dirname, '/db/api/articles.json'), (err, data) => {
    if (err) {
      res.status(404);
      res.end('cannot read articles.json');
    }
    const articles = JSON.parse(data);
    res.set('x-total-count', config.TOTAL_PAGE_COUNT);
    res.json(articles);
  });
});

app.listen(3009, '0.0.0.0', (err, result) => {
  if (err) {
    throw err;
  }
  console.log('Server listening on port 3009...');
});
