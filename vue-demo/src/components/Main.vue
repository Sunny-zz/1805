<template>
  <div class="main">
    <div class="nav">
      <h3>热门文章</h3>
      <ul>
        <li>
          <router-link exact active-class='active1' to='/'>推荐</router-link>
        </li>
        <li>
          <router-link active-class='active1' to='/welcome/frontend'>前端</router-link>
        </li>
        <li>
          <router-link active-class='active1' to='/welcome/backend'>后端</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.main .nav {
  height: 40px;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  background-color: rgb(140, 224, 203);
  margin-top: 20px;
}
.main .nav h3,
.main .nav ul {
  margin: 0;
  padding: 0;
}
.main .nav ul {
  display: flex;
  list-style-type: none;
}
.main .nav ul li {
  margin-right: 20px;
}
.main .nav ul li a {
  color: #fff;
}
.main .nav ul li a.active1 {
  color: red;
}
</style>




