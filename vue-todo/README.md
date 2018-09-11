# vue-hello

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### 在 vue 的 @vue/cli 环境中 中使用 sass

- 安装 sass-loader 和 node-sass
  往往 window 或个别系统安装不上 node-sass ，推荐使用 cnpm 安装，首先安装 cnpm，使用 npm i -g cnpm。安装完毕之后使用 cnpm i node-sass --save， --save 参数不可省略
- 安装完毕之后，在 vue 组件中 style 标签内，声明 lang='scss'，就可以使用 sass 了。
