<template>
  <footer>
    <div :class="['cart-img',total?'cart-active':'']">
      <span class='cart-icon'></span>
      <span v-show='allCount' class="count-num">{{allCount}}</span>
    </div>
    <p class="cart-info">
      <span class='show-total'>{{total?`￥${total}`:'未选购商品'}}</span>
      <span>另需配送费3元</span>
    </p>
    <div class='total'>
      <span v-if="total< 20">{{total!==0? '差':''}}¥{{20-total}}起送</span>
      <span class="balance" v-else>去结算</span>
    </div>

  </footer>
</template>
<script>
export default {
  name: 'foot',
  computed: {
    total() {
      return this.$store.getters.getTotalObj.total
    },
    allCount() {
      return this.$store.getters.getTotalObj.allCount
    }
  }
}
</script>


<style lang="scss" scoped>
footer {
  display: flex;
  flex-shrink: 0;
  height: 13vw;
  background-color: #535356;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  .cart-info {
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-left: -11vw;
    font-size: 12px;
    justify-content: center;
    color: #999;
    .show-total {
      font-size: 16px;
      color: #fff;
      font-weight: 800;
    }
  }
  .cart-img {
    display: flex;
    padding: 2.5vw;
    border-radius: 50%;
    border: 1.5vw solid #444;
    height: 14vw;
    width: 14vw;
    left: 4vw;
    position: relative;
    top: -3.5vw;
    background-color: #3a3737;
    .cart-icon {
      width: 6vw;
      height: 6vw;
      background-image: url('../assets/img/cart1.svg');
      background-position: center;
    }
    .count-num {
      position: absolute;
      right: -1vw;
      top: -2vw;
      width: 5vw;
      height: 5vw;
      background-color: #ff3c15;
      font-size: 14px;
      text-align: center;
      color: #fff;
      line-height: 5vw;
      border-radius: 50%;
    }
  }
  .cart-active {
    background-color: #3190e8;
  }
  .cart-active .cart-icon {
    background-image: url('../assets/img/cart2.svg');
  }
  .total {
    width: 28vw;
    display: flex;
    font-size: 16px;
    color: #fff;
    font-weight: 900;
    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .balance {
      background-color: #38ca73;
    }
  }
}
</style>  
