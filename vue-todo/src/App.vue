<template>
  <div>
    <h1>TODO</h1>
    <Form />
    <TodoList />
    <TodoMenu />
  </div>
</template>

<script>
import Form from './components/Form'
import TodoList from './components/TodoList'
import TodoMenu from './components/TodoMenu'
export default {
  name: 'app',
  components: {
    Form,
    TodoList,
    TodoMenu
  }
}
</script>

