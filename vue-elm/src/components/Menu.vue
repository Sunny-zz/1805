<template>
  <div class="menu">
    <ul v-show="goodsNameList.length">
      <li v-for="(name,ind) in goodsNameList" :key='ind'>
        {{name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'elm-menu',
  props: ['changeScroll', 'activeTabIndex', 'changeActiveTabIndex'],
  computed: {
    goodsNameList() {
      return this.$store.getters.goodsNameList
    }
  }
}
</script>

<style lang='scss' scoped>
.menu {
  width: 80px;
  ul .active {
    color: red;
  }
}
</style>
