<template>
  <div>
    <span>{{activeNum}} items left</span>
    <div>
      <button @click="$store.commit('filterTodos','all')" :class="{active:$store.state.filter.filter === 'all'}">all</button>
      <button @click="$store.commit('filterTodos','active')" :class="{active:$store.state.filter.filter === 'active'}">active</button>
      <button @click="$store.commit('filterTodos','completed')" :class="{active:$store.state.filter.filter === 'completed'}">completed</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todoMenu',
  computed: {
    activeNum() {
      return this.$store.state.todos.filter(todo => !todo.completed).length
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>

