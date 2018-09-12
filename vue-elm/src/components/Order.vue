<template>
  <div class="order-wrap">
    <Menu />
    <FoodList />
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
