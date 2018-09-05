<template>
  <div class="box-wrap">
    <div>
      <input type="text" v-model.trim="comment">
      <button @click="addComment">评论</button>
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
    comment: '',
    comments: []
  }),
  methods: {
    addComment() {
      if (this.$data.comment) {
        const newComment = {
          text: this.$data.comment,
          id: Math.floor(Math.random() * 10000)
        }
        this.$data.comments.push(newComment)
        this.$data.comment = ''
      } else {
        alert('请输入有效字符')
      }
    },
    delComment(id) {
      this.$data.comments.splice(
        this.$data.comments.findIndex(t => t.id === id),
        1
      )
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
