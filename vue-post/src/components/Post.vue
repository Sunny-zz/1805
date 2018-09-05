<template>
  <div class="wrap">
    <PostBody :comments="comments" />
    <CommentBox :comments="comments" :addComment="addComment" :delComment="delComment" />
  </div>
</template>
<script>
import PostBody from './PostBody'
import CommentBox from './CommentBox'
export default {
  name: 'post',
  components: {
    PostBody,
    CommentBox
  },
  data: () => ({
    comments: [
      {
        id: '21123',
        text: '123712876'
      }
    ]
  }),
  methods: {
    addComment(comment) {
      if (comment) {
        const newComment = {
          text: comment,
          id: Math.floor(Math.random() * 10000)
        }
        this.$data.comments.push(newComment)
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
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #00b3d4;
}
</style>
