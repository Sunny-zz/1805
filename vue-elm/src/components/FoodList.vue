<template>
  <div class="food-list" ref='wrapper'>
    <div v-show="goods.length">
      <div v-for="good in goods" :key="good.id">
        <h3>{{good.name}}</h3>
        <div v-for="food in good.foods" :key="food.id">
          {{food.name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'foodList',
  props: ['changeActiveTabIndex'],
  computed: {
    goods() {
      return this.$store.state.goods.goods
    }
  },
  mounted() {
    // const tabs = document.querySelectorAll('.food-tab')
    // let offsetTopList = []
    // for (let i = 0; i < tabs.length; i++) {
    //   offsetTopList.push(tabs[i].offsetTop - tabs[0].offsetTop)
    // }
    // this.$nextTick(() => {
    //   this.scroll = new Bscroll(this.$refs.wrapper, { probeType: 3 })
    //   this.scroll.on('scroll', pos => {
    //     if (-pos.y < offsetTopList[1]) {
    //       this.changeActiveTabIndex(0)
    //     } else if (-pos.y < offsetTopList[2]) {
    //       this.changeActiveTabIndex(1)
    //     } else if (-pos.y > offsetTopList[2]) {
    //       this.changeActiveTabIndex(2)
    //     }
    //   })
    // })
  }
}
</script>

<style lang="scss" scoped>
.food-list {
  flex-grow: 1;
  overflow: auto;
  > div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    > div > div {
      height: 80px;
    }
  }
}
</style>
