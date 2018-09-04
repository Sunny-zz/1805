<template>
  <div class='app'>
    <HelloWorld />
    <div v-html="msg"></div>
    <span>{{ show ? '下午': '上午'}}</span>
    <span :class="{active:isActive}" :style="{fontSize:size}">测试</span>
    <button v-show='isLogin' @click="handleClick">收藏</button>
    <span v-if="!users.length">加载中...</span>
    <ul v-else>
      <li v-for="user in users" :key="user.id" @click="handleChange(user.id)" :class="{active: activeId === user.id}">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// template 内部要使用 js 语法的话 分为两类 第一在两个标签内部使用js {{js}}
// 第二 想要在标签的属性内使用js   "js" (标签的自带属性需使用 v-bind)
// v-bind: 指令可以省略成 :      功能：当html标签的自带属性需要使用js控制时该属性需要使用 v-bind 绑定
export default {
  name: 'app',
  data: () => ({
    msg: '<h3>hello</h3>',
    show: true,
    isActive: true,
    size: '100px',
    isLogin: true,
    users: [
      {
        id: '1231',
        name: 'zzt'
      },
      {
        id: '12ss',
        name: 'ym'
      }
    ],
    activeId: ''
  }),
  components: {
    HelloWorld
  },
  methods: {
    // 使用 this.$data 访问 vue 组件的 data 对象，直接对该对象下的属性进行修改就是更新了 data 数据。但是需要注意的是，修改 data 的函数必须是普通函数不能是箭头函数(箭头函数 this.$data 不会指向组件的 data)。
    handleClick: function() {
      this.$data.isLogin = false
    },
    handleChange: function(id) {
      this.$data.activeId = id
    }
  }
}
</script>


<style scoped>
.active {
  color: red;
}
</style>
