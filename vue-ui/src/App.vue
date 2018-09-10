<template>
  <div id="app">
    <!-- <el-button>button</el-button>
    <el-pagination background :total='1000' :page-size='20' :pager-count='9' layout="prev, pager, next, jumper, total">
    </el-pagination>
    <el-progress :percentage="number" style="width:400px" :stroke-width="18" color="#8e71c7"></el-progress>
    <el-progress type="circle" :percentage="number" :width="200" :stroke-width='20' color="#8e71c7"></el-progress> -->
    <mt-search v-model="value"></mt-search>
    <RulerIcon />
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import RulerIcon from './components/RulerIcon'
export default {
  name: 'app',
  components: {
    RulerIcon
  },
  data: () => ({
    number: 0,
    value: ''
  }),
  mounted() {
    // 计时器使用 需要将计时器的返回赋值给 this 下的一个变量，相当于创建一个全局变量，清除定时器的时候直接清除这个全局变量即可,一般计时器都需要在组件销毁的时候(destroyed)清除
    this.run = requestAnimationFrame(this.change)
    MessageBox('提示', '操作成功')
  },
  destroyed() {
    cancelAnimationFrame(this.run)
  },
  methods: {
    change() {
      this.number++
      if (this.number < 80) {
        this.run = requestAnimationFrame(this.change)
      }
    }
  }
}
</script>

