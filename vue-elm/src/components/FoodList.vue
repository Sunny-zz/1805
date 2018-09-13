<template>
  <div class="food-list" ref='wrapper'>
    <div>
      <div class="hot food-tab" ref='hot'>
        <h3>热销</h3>
        <button @click="scroll.scrollToElement($refs.good,1000)">滚动</button>
        <div>第一个hot</div>
        <div>第二个hot</div>
        <div>第三个hot</div>
        <div>第四个hot</div>
        <div>第吴个hot</div>
        <div>第六个hot</div>
      </div>
      <div class="discount food-tab" ref='discount'>
        <h3>优惠</h3>
        <div>第一个discount</div>
        <div>第二个discount</div>
        <div>第三个discount</div>
        <div>第四个discount</div>
        <div>第吴个discount</div>
        <div>第六个discount</div>
      </div>
      <div class="good food-tab" ref='good'>
        <h3>精品</h3>
        <div>第一个good</div>
        <div>第二个good</div>
        <div>第三个good</div>
        <div>第四个good</div>
        <div>第吴个good</div>
        <div>第六个good</div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'foodList',
  props: ['changeActiveTabIndex'],
  mounted() {
    const tabs = document.querySelectorAll('.food-tab')
    let offsetTopList = []
    for (let i = 0; i < tabs.length; i++) {
      offsetTopList.push(tabs[i].offsetTop - tabs[0].offsetTop)
    }
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, { probeType: 3 })
      this.scroll.on('scroll', pos => {
        if (-pos.y < offsetTopList[1]) {
          this.changeActiveTabIndex(0)
        } else if (-pos.y < offsetTopList[2]) {
          this.changeActiveTabIndex(1)
        } else if (-pos.y > offsetTopList[2]) {
          this.changeActiveTabIndex(2)
        }
      })
    })
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
