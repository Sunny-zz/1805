<template>
  <div id="app">
    <el-button>button</el-button>
    <el-pagination background :total='1000' :page-size='20' :pager-count='9' layout="prev, pager, next, jumper, total">
    </el-pagination>
    <el-progress :percentage="number" style="width:400px" :stroke-width="18" color="#8e71c7"></el-progress>
    <el-progress type="circle" :percentage="number" :width="200" :stroke-width='20' color="#8e71c7"></el-progress>
  </div>
</template>
<script>
export default {
  name: 'app',
  data: () => ({
    number: 0
  }),
  mounted() {
    // 计时器使用 需要将计时器的返回赋值给 this 下的一个变量，相当于创建一个全局变量，清除定时器的时候直接清楚这个全局变量即可,一般计时器都需要在组件销毁的时候(destroyed)清除
    requestAnimationFrame(this.change)
  },
  destroyed() {},
  methods: {
    change() {
      this.number++
      if (this.number < 80) {
        requestAnimationFrame(this.change)
      }
    }
  }
}
</script>

