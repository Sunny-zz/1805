<template>
  <div class="menu">
    <ul v-show="goodsNameList.length">
      <li v-for="(name,ind) in goodsNameList" :key='ind' :class="{active:activeTabIndex=== ind}" @click="changeActiveTabIndex(ind);changeScroll(`foodTab${ind}`);">
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
  flex-shrink: 0;
  background-color: #f8f8f8;
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style-type: none;
    li {
      padding: 4.5vw 2vw;
      font-size: 14px;
      color: #666;
    }
    .active {
      background-color: #fff;
      color: red;
    }
  }
}
</style>
