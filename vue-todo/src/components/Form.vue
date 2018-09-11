<template>
  <div>
    <input type="text" v-model="todo">
    <button @click="addTodo">提交</button>
  </div>
</template>
<script>
export default {
  name: 'forms',
  data: () => ({
    todo: ''
  }),
  methods: {
    addTodo() {
      if (this.todo.trim()) {
        this.$store.commit('addTodo', this.todo)
        this.todo = ''
      }
    }
  }
}
</script>
