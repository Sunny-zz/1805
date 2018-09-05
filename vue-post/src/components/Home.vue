<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link to='/post'>{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    posts: [
      {
        id: '1',
        title: 'vue 基础',
        content: '挺好的'
      },
      {
        id: '2',
        title: 'react 基础',
        content: '也不错'
      }
    ]
  })
}
</script>

