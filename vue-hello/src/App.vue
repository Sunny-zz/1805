<template>
  <div class='app'>
    <HelloWorld />
    <div v-html="msg"></div>
    <span>{{ show ? '下午': '上午'}}</span>
    <span :class="{active:isActive}" :style="{fontSize:size}">测试</span>

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
    show: false,
    isActive: true,
    size: '100px'
  }),
  components: {
    HelloWorld
  }
}
</script>


<style scoped>
.active {
  color: red;
}
</style>
