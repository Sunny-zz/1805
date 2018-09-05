<template>
  <div class="body-wrap">
    <div v-if="!post">加载中。。。</div>
    <article v-else>
      <h2>{{post.title}}</h2>
      <p>{{post.content}}</p>
      <span class="number">评论数：{{commentNum}}</span>
    </article>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'postBody',
  props: ['comments'],
  data: () => ({
    post: null
  }),
  computed: {
    commentNum() {
      return this.comments.length
    }
  },
  mounted() {
    const { id } = this.$route.params
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      this.post = res.data
    })
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
