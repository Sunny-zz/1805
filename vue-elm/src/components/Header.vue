<template>
  <header>
    <div class='head-bg'>
      <div></div>
    </div>
    <img class='head-img' src="../assets/img/head-logo.webp" alt="">
    <h1 @click="showModal = true">云龙凤姐大盘鸡水煮鱼</h1>
    <p>
      <span>评价4.7&nbsp;&nbsp;</span>
      <span>月售1563单&nbsp;&nbsp; </span>
      <span>蜂鸟专送 &nbsp;&nbsp;</span>
      <span>约26分钟</span>
    </p>
    <div v-show="showModal" class="modal-wrap" @click="showModal = false"></div>
    <div v-show="showModal" class="modal">
      <h2>云龙凤姐大盘鸡水煮鱼</h2>
      <ul>
        <li></li>
      </ul>
      <div class="cancle" @click="showModal = false">
        <img src="../assets/img/cancle.webp" alt="">
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'heade',
  data: () => ({
    showModal: false
  })
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .head-bg {
    width: 100%;
    height: 26vw;
    background-color: rgba(119, 103, 137, 0.43);
  }
  .head-bg > div {
    background-image: url('../assets/img/head-bg.webp');
    width: 100%;
    height: 26vw;
    background-size: cover;
    position: relative;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .head-img {
    width: 20vw;
    position: absolute;
    top: 12vw;
    border-radius: 4px;
    left: 40vw;
    display: block;
  }
  h1 {
    margin-top: 8vw;
    margin-bottom: 0;
    font-size: 20px;
  }
  p {
    display: flex;
    margin: 0;
    font-size: 10px;
    color: #666;
    margin-top: 4px;
  }
  .modal-wrap {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    width: 80vw;
    position: absolute;
    height: 45vw;
    z-index: 99;
    top: 50vh;
    margin-top: -30.5vw;
    padding: 7vw;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .modal .cancle {
    width: 9vw;
    height: 9vw;
    position: absolute;
    bottom: -15vw;
  }
  .modal .cancle img {
    width: 100%;
    display: block;
  }
}
</style>
