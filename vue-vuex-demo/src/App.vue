<template>
  <div>
    <button>-</button>
    <span>{{this.$store.state.count.count}}</span>
    <button @click="$store.commit('increment')">+</button>
    <Home />
  </div>
</template>
<script>
// 使用 this.$store.state 访问 store 中的数据
import Home from './components/Home'
export default {
  name: 'app',
  components: {
    Home
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>
