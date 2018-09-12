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
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  nav {
    width: 100%;

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      list-style-type: none;
      justify-content: space-around;
      border-bottom: 1px solid #f1f1f1;
      li {
        display: flex;
        a {
          padding: 6px 0px 6px;
          color: #666;
          font-weight: 400;
          font-size: 14px;
          border-bottom: 2px solid #fff;
        }
        .active {
          color: #333;
          border-bottom: 2px solid #2395ff;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
