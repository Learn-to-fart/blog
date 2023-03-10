## blog博客

这是我们的官网：[shenjiancheng.com](http://shenjiancheng.com/)


### 启动

```bash
# 安照依赖包
yarn

# 启动项目
yarn start

# 打包 发布
yarn build
```


### 文件目录
```bash
.
├── node_modules
├── public
│  ├── favicon.ico
│  └── index.html
├── src
│  ├── assets               # 原始资源文件
│  │  └── ...
│  ├── components           # 存放全局组件
│  │  └── ...
│  ├── layouts              # 布局
│  │  └── BasicLayout.tsx   # 基础布局组件
│  ├── models
│  │  └── global.ts
│  ├── pages                # 页面， 文件名大写
│  │  └── ...
│  ├── router
│  │  └── index.tsx         # 路由表
│  ├── utils
│  │  └── utils.ts
│  ├── APP.tsx
│  └── index.tsx
├── .eslintignore           # 忽略eslint检查文件
├── .eslintrc.js            # eslint配置文件
├── .gitignore              # git忽略文件
├── .prettierignore         # 忽略prettier检查配置文件
├── .prettierrc.js          # prettier配置文件
├── commitlint.config.js    # prettier配置文件
├── LICENSE
├── package.json            # 自述文件
├── README.md               # 自述文件
├── tsconfig.json           # TypeScript 配置文件
└── yarn.lock
```
