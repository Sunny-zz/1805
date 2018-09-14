<template>
  <div class='wrap'>
    <Header />
    <Main />
  </div>
</template>
<script>
import Header from './components/Header'
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    Header,
    Main
  },
  mounted() {
    this.$store.dispatch('getGoods')
  }
}
</script>
<style  scoped>
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>

