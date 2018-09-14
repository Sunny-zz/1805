<template>
  <div class="count">
    <p v-show="$store.getters.getFoodNum(food.id)" class="sub" @click.stop="$store.commit('subCountNum',food.id)"></p>
    <span class="count-num" v-show="$store.getters.getFoodNum(food.id)">{{$store.getters.getFoodNum(food.id)}}</span>
    <p @click.stop="$store.commit('addToCart',food)" class="add"></p>
  </div>
</template>
<script>
export default {
  name: 'count',
  props: ['food']
}
</script>
<style lang="scss" scoped>
.count {
  display: flex;
  width: 20vw;
  align-items: center;
  justify-content: flex-end;
  height: 10vw;
  p {
    width: 6vw;
    height: 6vw;
    background-size: cover;
  }
  .count-num {
    margin: 0 2vw;
  }
  .sub {
    width: 7vw;
    height: 7vw;
    background-image: url('../assets/img/subIcon.png');
  }
  .add {
    background-image: url('../assets/img/addIcon.png');
  }
}
</style>
