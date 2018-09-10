<template>
  <div>
    <p>
      <button @click="$router.back()">back</button>
      <button @click="$router.push('/')">首页</button>
    </p>
    用户展示
  </div>
</template>
<script>
export default {
  name: 'user'
  // methods: {
  //   back() {
  //     this.$router.back()
  //   }
  // }
}
</script>
