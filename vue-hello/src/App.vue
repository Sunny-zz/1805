<template>
  <div class='app'>
    <HelloWorld :msg="msg" :handleClick="handleClick" />
    <div v-html="msg"></div>
    <span>{{ show ? '下午': '上午'}}</span>
    <span :class="{active:isActive}" :style="{fontSize:size}">测试</span>
    <button v-show='isLogin' @click="handleClick">收藏</button>
    <span v-if="!users.length">加载中...</span>
    <ul v-else>
      <li v-for="user in users" :key="user.id" @click="handleChange(user.id)" :class="{active: activeId === user.id}">{{user.name}}</li>
    </ul>
    <input type="text" v-model="text">
    <button @click="handleButton">输出</button>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="麦克" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// template 内部要使用 js 语法的话 分为两类 第一在两个标签内部使用js {{js}}
// 第二 想要在标签的属性内使用js   "js" (标签的自带属性需使用 v-bind)
// v-bind: 指令可以省略成 :      功能：当html标签的自带属性需要使用js控制时该属性需要使用 v-bind 绑定

// vue 指令  v-bind  v-on  v-for  v-if v-else v-show v-model
export default {
  name: 'app',
  data: () => ({
    msg: '<h3>xxxx</h3>',
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
    activeId: '',
    text: '',
    checkedNames: []
  }),
  components: {
    HelloWorld
  },
  methods: {
    // 使用 this.$data 访问 vue 组件的 data 对象，直接对该对象下的属性进行修改就是更新了 data 数据。但是需要注意的是，修改 data 的函数必须是普通函数不能是箭头函数(箭头函数 this.$data 不会指向组件的 data)。
    handleClick: function() {
      this.$data.isLogin = !this.$data.isLogin
    },
    handleChange: function(id) {
      this.$data.activeId = id
    },
    handleButton: function() {
      console.log(this.$data.text)
    }
  }
}
</script>


<style scoped>
.active {
  color: red;
}
</style>
