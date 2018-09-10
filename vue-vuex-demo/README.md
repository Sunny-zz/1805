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

## Vuex 的使用

#### 安装

`npm i vuex`

#### 创建

- 在 src 下新建 store/index.js
- 在 index.js 内使用 Vuex.Store() 方法创建 store 具体内容如下

  ```js
  import Vuex from 'vuex'
  import Vue from 'vue'
  Vue.use(Vuex)

  const state = {
    count: 0
  }
  const mutations = {
    increment(state) {
      state.count++
    }
  }
  const store = new Vuex.Store({
    state,
    mutations
  })

  export default store
  // state 指的就是数据
  // mutstions 指的就是修改数据的方法
  // store 指的就是创建好之后的 store
  ```

### 使用

- 到 main.js 下 引入并导入

  ```js
  import store from './store'
  new Vue({
    render: h => h(App),
    store
  }).$mount('#app')
  ```

- 在任意的组件内部，可以使用 `this.$store.state` 访问 store 中的数据了

- 如果想要修改 store 中的数据的话，使用 this.$store.commit('mutation 函数名') 触发 mutation 从而修改 store。
