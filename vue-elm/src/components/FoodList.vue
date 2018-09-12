<template>
  <div class="food-list" ref='wrapper'>
    <div>
      <div class="hot">
        <h3>热销</h3>
        <button @click="scroll.scrollToElement($refs.discount,1000)">滚动</button>
        <div>第一个hot</div>
        <div>第二个hot</div>
        <div>第三个hot</div>
        <div>第四个hot</div>
        <div>第吴个hot</div>
        <div>第六个hot</div>
      </div>
      <div class="discount" ref='discount'>
        <h3>优惠</h3>
        <div>第一个discount</div>
        <div>第二个discount</div>
        <div>第三个discount</div>
        <div>第四个discount</div>
        <div>第吴个discount</div>
        <div>第六个discount</div>
      </div>
      <div class="good" ref='good'>
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
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {})
    })
  },
  a(el) {
    this.scroll.scrollToElement(el, 1000)
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
