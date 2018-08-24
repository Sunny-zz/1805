import React, { Component } from 'react'
import { getCurrentTodos } from '../selectors'
class TodoList extends Component {
  render() {
    const { todos, filter } = this.props
    const todoList = getCurrentTodos(todos, filter).map(todo => (
      <li key={todo.id}>{todo.todoText}</li>
    ))
    return (
      <div>
        <ul>{todoList}</ul>
      </div>
    )
  }
}

export default TodoList
