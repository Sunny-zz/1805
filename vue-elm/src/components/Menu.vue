<template>
  <div class="menu">
    <ul>
      <li @click="changeScroll('hot');changeActiveTabIndex(0)" :class="{active:activeTabIndex===0}">热销</li>
      <li @click="changeScroll('discount');changeActiveTabIndex(1)" :class="{active:activeTabIndex===1}">优惠</li>
      <li @click="changeScroll('good');changeActiveTabIndex(2)" :class="{active:activeTabIndex===2}">精品</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'elm-menu',
  props: ['changeScroll', 'activeTabIndex', 'changeActiveTabIndex']
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
