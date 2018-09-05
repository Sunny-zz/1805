<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to='{
          path:`/post/${post.id}`
        }'>{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data: () => ({
    posts: []
  }),
  mounted() {
    axios.get('http://localhost:3008/posts').then(res => {
      this.posts = res.data
    })
  }
}
</script>

