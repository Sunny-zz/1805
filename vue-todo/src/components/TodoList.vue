<template>
  <div>
    <ul v-if='$store.state.todos.length'>
      <li v-for="todo in todos" :key="todo.id" :style="{textDecoration: todo.completed ? 'line-through' :'none' }" @click="changeTodo(todo.id,todo.completed)">{{todo.todo}}</li>
    </ul>
    <span v-else>请添加待办事项</span>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'todoList',
  methods: {
    changeTodo(id, completed) {
      axios
        .patch(`http://localhost:3008/todos/${id}`, { completed: !completed })
        .then(res => {
          this.$store.commit('completedTodo', id)
        })
    }
  },
  computed: {
    todos() {
      return this.$store.getters.filterTodos(this.$store.state.filter.filter)
    }
  }
}
</script>

