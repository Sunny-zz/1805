<template>
  <div class="list">
    <h4>展示列表</h4>
    <span>{{this.$route.params.tab}}</span>
    <router-link :to="{name:'user'}">用户头像</router-link>
  </div>
</template>
<script>
export default {
  name: 'showlist',
  mounted() {
    window.onscroll = function() {
      console.log(1)
      // 函数节流和防抖
    }
  }
}
</script>

<style>
.list {
  height: 1000px;
}
</style>
