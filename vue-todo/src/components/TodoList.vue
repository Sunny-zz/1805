<template>
  <div>
    <ul v-if='$store.state.todos.length'>
      <li v-for="todo in todos" :key="todo.id" :style="{textDecoration: todo.completed ? 'line-through' :'none' }">
        <span @click="changeTodo(todo.id,todo.completed)">{{todo.todo}}</span>
        <button @click="$store.dispatch('delTodo',{id:todo.id})">删除</button>
      </li>
    </ul>
    <span v-else>请添加待办事项</span>
    <button @click="click">按钮</button>
    <input type="text" ref="inp" v-focus="true">
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
        .then(() => {
          this.$store.commit('completedTodo', id)
        })
    },
    click() {
      console.log(this.$refs.inp.focus())
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },
  computed: {
    todos() {
      return this.$store.getters.filterTodos(this.$store.state.filter.filter)
    }
  }
}
</script>

