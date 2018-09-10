<template>
  <div>
    <h4>展示列表</h4>
    <span>{{this.$route.params.tab}}</span>
    <router-link :to="{name:'user'}">用户头像</router-link>
  </div>
</template>
