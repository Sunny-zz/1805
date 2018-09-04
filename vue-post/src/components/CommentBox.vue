<template>
  <div class="box-wrap">
    <div>
      <input type="text" v-model="comment">
      <button>评论</button>
    </div>
    <div>
      <h4>评论</h4>
      <ul>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
        <li>哈哈哈</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commentBox',
  data: () => ({
    comment: ''
  })
}
</script>

<style scoped>
.box-wrap {
  width: 400px;
  height: 280px;
  background-color: #f1f3ec;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
