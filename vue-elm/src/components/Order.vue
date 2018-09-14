<template>
  <div class="order-wrap">
    <div class="foods-wrap">
      <Menu :changeScroll='changeScroll' :activeTabIndex='activeTabIndex' :changeActiveTabIndex='changeActiveTabIndex' />
      <FoodList ref='foodList' :changeActiveTabIndex='changeActiveTabIndex' :changeShowDetail='changeShowDetail' />
    </div>
    <Foot />
    <FoodDetail :showDetail='showDetail' :changeShowDetail='changeShowDetail' />
  </div>
</template>
<script>
import Menu from './Menu'
import FoodList from './FoodList'
import Foot from '../components/Foot'
import FoodDetail from '../components/FoodDetail'
export default {
  name: 'order',
  data: () => ({
    activeTabIndex: 0,
    showDetail: null
  }),
  components: {
    Menu,
    FoodList,
    Foot,
    FoodDetail
  },
  methods: {
    changeScroll(el) {
      const { foodList } = this.$refs
      foodList.scroll.scrollToElement(foodList.$refs[el][0], 300)
    },
    changeActiveTabIndex(ind) {
      this.activeTabIndex = ind
    },
    changeShowDetail(food) {
      this.showDetail = food
    }
  }
}
</script>

<style lang="scss" scoped>
.order-wrap {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .foods-wrap {
    display: flex;
  }
}
</style>
