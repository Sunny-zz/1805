<template>
  <div class="body-wrap">
    <h2>vue 基础知识</h2>
    <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
    <span class="number">评论数：{{commentNum}}</span>
  </div>
</template>
<script>
export default {
  name: 'postBody',
  props: ['comments'],
  computed: {
    commentNum() {
      return this.comments.length
    }
  }
}
</script>


<style scoped>
.body-wrap {
  width: 400px;
  height: 280px;
  background-color: #f1f3ec;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.number {
  position: absolute;
  right: 2px;
  bottom: 2px;
}
</style>
