<template>
  <div class='wrap'>
    <Header />
    <Main />
    <Foot />
  </div>
</template>
<script>
import Header from './components/Header'
import Main from './components/Main'
import Foot from './components/Foot'
export default {
  name: 'app',
  components: {
    Header,
    Main,
    Foot
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

