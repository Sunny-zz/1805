<template>
  <div class="box-wrap">
    <div>
      <input type="text" v-model.trim="comment">
      <button @click="handleClick">评论</button>
    </div>
    <div>
      <h4>评论</h4>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{comment.text}}
          <button @click="delComment(comment.id)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commentBox',
  data: () => ({
    comment: ''
  }),
  props: ['comments', 'addComment', 'delComment'],
  methods: {
    handleClick() {
      this.$props.addComment(this.$data.comment)
      this.$data.comment = ''
    }
  }
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
