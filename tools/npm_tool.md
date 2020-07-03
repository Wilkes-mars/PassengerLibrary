#### 全局安装 Less
> npm install -g less  
  
    
**********
#### 初始化项目
> cd d:/WeChatProject/mini-sir-wechat

##### 右键Git Bash Here
> npm init

![](https://gitee.com/hwzheng/learns/raw/master/code/js/markdown/git/images/001.png "git bash")
##### 生成 package.json 文件
##### 打开 mini-sir-wechat 项目


**********
#### 安装项目依赖包（或插件包）

 「babel 配置」
```code
npm install --save-dev babel-cli babel-core  babel-loader@7.1.2 babel-plugin-add-module-exports babel-polyfill babel-preset-es2015 babel-preset-latest babel-preset-stage-0

npm install --save-dev babel-plugin-transform-runtime //作为开发依赖

npm install --save babel babel-runtime // 作为生产依赖

npm install --save-dev babel-preset-es2015@6.24.1

npm install --save-dev babel-preset-stage-0
```

 「webpack.3.x 安装及其插件」
```code
npm install webpack@3.5.5 webpack-cli@2.0.14 webpack-dev-server@2.7.1 webpack-merge@4.1.0 copy-webpack-plugin@4.0.1
```
![](https://gitee.com/hwzheng/learns/raw/master/code/js/markdown/git/images/002.png "vscode")

项目目录构建
- 其中 src文件夹（项目开发文件都在其中），然后分别在里面新建 assets component es6 pages utils app.js  app.json app.wxss
- assets:主要用于存放公用wxss 跟 静态图片（一般只存放tabbar的iconImage，其他都用在线图片）
- es6：放一些全局可用的js，封装过的方法，es6 里面的文件先按照我的命名建起来
- pages:用于存放页面，每个页面就是一个文件夹，分别由js、json、wxss、wxml文件构成,我们这里采用的是less，less实时编译成wxss。这里先不要建，下一节我会详细讲解这里。
- utils：存放各种工具类js等
- app.js、app.json、app.wxss ：小程序实例文件，app.js存放小程序逻辑；app.json文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等；app.wxss小程序公共样式表
