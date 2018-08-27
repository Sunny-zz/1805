import React, { Component } from 'react'
import { getCurrentTodos } from '../selectors'
import axios from 'axios'
class TodoList extends Component {
  handleClick = id => {
    const { todos, completedTodo } = this.props
    const uri = `http://localhost:3008/todos/${id}`
    axios
      .patch(uri, {
        isCompleted: !todos.find(todo => todo.id === id).isCompleted
      })
      .then(() => {
        completedTodo(id)
      })
  }
  render() {
    const { todos, filter } = this.props
    const todoList = getCurrentTodos(todos, filter).map(todo => (
      <li
        style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
        onClick={() => {
          this.handleClick(todo.id)
        }}
        key={todo.id}
      >
        {todo.todoText}
      </li>
    ))
    return (
      <div>
        <ul>{todoList}</ul>
      </div>
    )
  }
}

export default TodoList
