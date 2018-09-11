<template>
  <div class="menu-wrap">
    <span>{{$store.getters.activeNum}} items left</span>
    <div>
      <button @click="$store.commit('filterTodos','all')" :class="{active:$store.state.filter.filter === 'all'}">all</button>
      <button @click="$store.commit('filterTodos','active')" :class="{active:$store.state.filter.filter === 'active'}">active</button>
      <button @click="$store.commit('filterTodos','completed')" :class="{active:$store.state.filter.filter === 'completed'}">completed</button>

    </div>
  </div>
</template>
<script>
export default {
  name: 'todoMenu'
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.menu-wrap {
  .active {
    color: $color;
  }
}
</style>


