import React, { Component } from 'react'
import { getCurrentTodos } from '../selectors'
class TodoList extends Component {
  handleClick = id => {
    console.log(id)
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
