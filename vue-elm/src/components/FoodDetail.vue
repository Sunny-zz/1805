<template>
  <transition name='jump'>
    <div v-if="showDetail" class="detail-box">
      <img :src="showDetail.image" alt="">
      <img @click="changeShowDetail(null)" class="cancle" src="../assets/img/cancle.webp" alt="">
      <Count :food='showDetail' />
    </div>
  </transition>
</template>
<script>
import Count from './Count'
export default {
  name: 'foodDetail',
  props: ['showDetail', 'changeShowDetail'],
  components: {
    Count
  }
}
</script>

<style lang="scss" scoped>
.detail-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  .cancle {
    width: 10vw;
    height: 10vw;
    position: absolute;
    top: 2vw;
    right: 2vw;
  }
}
.jump-enter-active,
.jump-leave-active {
  transition: all 0.3s;
}
.jump-enter,
.jump-leave-to {
  transform: translateY(100vh);
}
</style>

