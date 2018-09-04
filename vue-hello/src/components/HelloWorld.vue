<template>
  <div>
    <h1 v-html="msg"></h1>
    <button @click='handleClick'>切换收藏显示和消失</button>
  </div>
</template>


<script>
export default {
  name: 'helloWorld',
  props: ['msg', 'handleClick']
}
</script>
