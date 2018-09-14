<template>
  <footer>
    <div class="cart-img">
      <span></span>
    </div>
    <p class="cart-info">
      <span>未选购商品</span>
      <span>另需配送费3元</span>
    </p>
    <div class='total'>
      <span>¥20起送</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-shrink: 0;
  height: 13vw;
  background-color: #535356;
  justify-content: space-between;
  .cart-info {
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-left: -11vw;
    font-size: 12px;
    justify-content: center;
    color: #999;
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
    // background-image: radial-gradient(circle, #3a3737 6.266667vw, #444 0);
    background-color: #3a3737;
    span {
      width: 6vw;
      height: 6vw;
      background-image: url('../assets/img/cart1.svg');
      background-position: center;
    }
  }
  .total {
    width: 28vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    font-weight: 900;
  }
}
</style>  
