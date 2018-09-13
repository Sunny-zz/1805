<template>
  <div class="order-wrap">
    <Menu />
    <button @click="$refs.foodList.scroll.scrollToElement($refs.foodList.$refs.good,1000)"></button>
    <FoodList ref='foodList' />
  </div>
</template>
<script>
import Menu from './Menu'
import FoodList from './FoodList'
export default {
  name: 'order',
  components: {
    Menu,
    FoodList
  }
}
</script>

<style lang="scss" scoped>
.order-wrap {
  display: flex;
  flex-grow: 1;
}
</style>
