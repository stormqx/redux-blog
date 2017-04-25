# redux blog

之前断断续续写了这个项目，然而写到一半才发现写出来的效果和自己想象中的不太一致，在观察了一些自认为优秀的博客后，决定进行重构，这次编写前会认真思考每个页面的设计，希望能写出令自己满意的博客。借鉴内容如下：

> [Smallpath的小站](https://smallpath.me/)：写的非常棒的博客，这篇博客主要向这位大牛学习。
> 
> [Jerry Qu](https://imququ.com/)： 屈屈大神的博客，首屏的加载速度简直是bug！！！各种性能优化，膜拜一下。
> 
> [SimplyY](http://simplyy.space/): simplyY的博客，由于我对于新版博客的预期也是类似于gitbook的形式，所以这位大牛的博客设计风格也要认真学习一个。
> 
> [gitbook](https://www.frontendhandbook.com/): 之前的博客的设计风格是向上无限滑动加载数据，做出来的交互效果个人不是很满意，所以这次打算模仿gitbook的设计风格，将信息集中在右部，使用分页来代替滑动无限加载吧。
> 
> [dtysky](http://dtysky.moe/)：喜欢这个博客的侧边栏图片的效果。该博客的前端技术栈和我的想法比较相近，可以向大神取经学习。

## 拟用技术栈

### front
* react
* redux
* react router
* webpack 2
* immutable

### server

* koa2 ?
* mongodb
* mongoose

### admin

* react 
* antd

## TODO

### front 

* [ ] home 
* [ ] article
* [ ] archieve
* [ ] tag 
* [ ] about
* [ ] footer
* [ ] 服务端渲染(了解下next.js?)
* [ ] Loading组件
* [ ] 异步操作封装
* [ ] 页面meta
* [ ] 侧边栏图片(参考[Smallpath的小站](https://smallpath.me/)和[dtysky](http://dtysky.moe/))
* [ ] https
* [ ] 首屏加载时间优化
* [ ] 404页面

### server

暂时打算使用koa2 + mongodb实现RESTful，详细内容后面再思考。

### admin

同时也希望做一个admin进行文章管理，可以考虑使用antd? 这里应该会比较复杂，先占坑后面再填。
