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

### vue router 基本使用

- 安装 vue-router 包
- 在 src 下新建 router/index.js 我们将 vue 的路由全部放到该文件下
- 进入到 router/index.js ，

  ```
    import VueRouter from 'vue-router'
    import Home from '../components/Home'
    import Post from '../components/Post'
    import Vue from 'vue'
    Vue.use(VueRouter)

    const routes = [
      { path: '/', component: Home },
      { path: '/post', component: Post }
    ]
    const router = new VueRouter({
      routes,
      mode: 'history'
    })

    export default router
    // Vue.use(VueRouter) 的意思是给 vue 添加路由功能，即在 vue 组件内可以使用路由的相关组件了。
    // router 指的就是就是创建好的路由，里面的 mode 意思代表的是路由使用 history 模式。
  ```

- 路由创建好了，到 main.js 下引入即可使用。

  ```
    import router from './router/index'
    new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  ```

- 然后其他的组件内部使用 router-view 就是展示路由组件，使用 router-link 即可跳转路由
