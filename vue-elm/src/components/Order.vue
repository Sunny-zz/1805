<template>
  <div class="order-wrap">
    <Menu :changeScroll='changeScroll' :activeTabIndex='activeTabIndex' :changeActiveTabIndex='changeActiveTabIndex' />
    <FoodList ref='foodList' :changeActiveTabIndex='changeActiveTabIndex' />
  </div>
</template>
<script>
import Menu from './Menu'
import FoodList from './FoodList'
export default {
  name: 'order',
  data: () => ({
    activeTabIndex: 0
  }),
  components: {
    Menu,
    FoodList
  },
  methods: {
    changeScroll(el) {
      const { foodList } = this.$refs
      foodList.scroll.scrollToElement(foodList.$refs[el], 1000)
    },
    changeActiveTabIndex(ind) {
      this.activeTabIndex = ind
    }
  }
}
</script>

<style lang="scss" scoped>
.order-wrap {
  display: flex;
  flex-grow: 1;
}
</style>
