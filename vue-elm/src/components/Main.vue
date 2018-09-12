<template>
  <div class="main">
    <nav>
      <ul>
        <li>
          <router-link active-class="active" exact to='/'>点餐</router-link>
        </li>
        <li>
          <router-link active-class="active" to='/evaluate'>评价</router-link>
        </li>
        <li>
          <router-link active-class="active" to='/seller'>商家</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.main {
  .active {
    color: red;
  }
}
</style>
