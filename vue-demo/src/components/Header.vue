<template>
  <header>
    <router-link :to="{name:'home'}" exact active-class='active' :class="{active:this.$route.path.includes('welcome') }">首页</router-link>
    <router-link :to="{name:'pins'}" active-class='active'>沸点</router-link>
    <router-link :to="{name:'events'}" active-class='active'>活动</router-link>
    <router-link :to="{name:'user'}" active-class='active'>用户</router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  height: 50px;
  background-color: rgb(131, 124, 128);
  width: 100%;
  justify-content: space-around;
  line-height: 50px;
}
header .active {
  color: red;
}
</style>
