<template>
  <div>
    <ul v-if='$store.state.todos.length'>
      <li v-for="todo in todos" :key="todo.id" :style="{textDecoration: todo.completed ? 'line-through' :'none' }" @click="$store.commit('completedTodo',todo.id)">{{todo.todo}}</li>
    </ul>
    <span v-else>请添加待办事项</span>
  </div>
</template>
<script>
export default {
  name: 'todoList',
  computed: {
    todos() {
      const { todos, filter } = this.$store.state
      return todos.filter(
        todo =>
          filter.filter === 'active'
            ? !todo.completed
            : filter.filter === 'completed' ? todo.completed : true
      )
    }
  }
}
</script>

