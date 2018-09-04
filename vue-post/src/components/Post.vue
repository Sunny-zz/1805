<template>
  <div class="wrap">
    <PostBody />
    <CommentBox />
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
