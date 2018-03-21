# aifocus-ui

> AiFocus UI based on Vue.js

## 项目wiki

[AIFocus-UI 基于Vue.js的移动端UI组件库](http://wiki.elephtribe.net/pages/viewpage.action?pageId=1738570)

## 代码编写规范

```

  按照ESLint代码规范(npm run dev后要求全绿，多余分号、空格这些已经禁用了，其他的规则需要严格遵守～)

```

## 开发指南

```

  1.新增的组件、插件都放在lib目录下，lib/index.js是所有组件、插件的导出文件；
  2.为新增的组件添加示例，放在src目录下，其中components中放置各个组件的示例页面组件。在router/index.js和components/index.vue中添加相应的路由和入口；
  3.为新增的组件添加说明文档，放在src/docs目录下。

```

## 发布及引用
```

发布流程：
  1.开发工作完成之后，对项目进行自测；
  2.更改package.json版本号(version)，用于发布新的版本；
  3.执行npm run build 命令,提交代码至远程仓库；
  4.执行npm publish命令，发布新版本的npm包

引用流程：
  1.进入项目，执行npm(cnpm) install aifocus-ui命令；
  2.项目中import组件库及对应css文件，调用Vue.use方法后，即可使用

  import aifocusUI from 'aifocus-ui'
  import 'aifocus-ui/dist/static/css/index.css'
  Vue.use(aifocusUI)

```

## 项目目录结构

```

.
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── index.html
├── lib 组件目录
│   ├── index.js 组件导出文件
│   └── toast 单个组件
│       ├── index.js
│       └── src
├── package.json
├── src 示例目录
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components 示例页面组件
│   │   ├── index.vue
│   │   └── toast.vue
│   ├── docs 组件文档目录
│   │   └── toast.md
│   ├── main.js
│   └── router 示例页面路由
│       └── index.js
├── static 静态文件目录
└── test
    ├── e2e
    │   ├── custom-assertions
    │   ├── nightwatch.conf.js
    │   ├── runner.js
    │   └── specs
    └── unit
        ├── jest.conf.js
        ├── setup.js
        └── specs

```

## Build Setup

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```
