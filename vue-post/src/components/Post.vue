<template>
  <div class="wrap">
    <PostBody :comments="comments" />
    <CommentBox :comments="comments" :addComment="addComment" :delComment="delComment" />
  </div>
</template>
<script>
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import axios from 'axios'
export default {
  name: 'post',
  components: {
    PostBody,
    CommentBox
  },
  data: () => ({
    comments: []
  }),
  mounted() {
    axios.get('http://localhost:3008/comments').then(res => {
      this.comments = res.data.filter(t => t.postId === this.$route.params.id)
    })
  },
  methods: {
    addComment(comment) {
      if (comment) {
        const newComment = {
          text: comment,
          id: Math.floor(Math.random() * 10000)
        }
        this.comments.push(newComment)
      } else {
        alert('请输入有效字符')
      }
    },
    delComment(id) {
      this.comments.splice(this.comments.findIndex(t => t.id === id), 1)
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
