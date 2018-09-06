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
    axios
      .get(
        'https://raw.githubusercontent.com/Sunny-zz/1805/master/vue-post/api/db.json'
      )
      .then(res => {
        this.posts = res.data.posts
      })
  }
}
</script>

