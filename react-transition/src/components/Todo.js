import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import './todo.css'
class Todo extends Component {
  state = {
    items: [
      { id: uuid(), text: 'Buy eggs' },
      { id: uuid(), text: 'Pay bills' },
      { id: uuid(), text: 'Invite friends over' },
      { id: uuid(), text: 'Fix the TV' }
    ],
    val: ''
  }
  handleChange = event => {
    this.setState({
      val: event.target.value
    })
  }
  addTodo = () => {
    const { items, val } = this.state
    const todo = {
      id: uuid(),
      text: val
    }
    this.setState({
      items: [...items, todo],
      val: ''
    })
  }
  delTodo = id => {
    const { items } = this.state
    this.setState({
      items: items.filter(item => item.id !== id)
    })
  }
  render() {
    const { items, val } = this.state
    const list = items.map(({ id, text }) => (
      <CSSTransition key={id} timeout={500} classNames="fade">
        <li>
          {text} <button onClick={() => this.delTodo(id)}>x</button>
        </li>
      </CSSTransition>
    ))
    return (
      <div>
        <input type="text" value={val} onChange={this.handleChange} />
        <button onClick={this.addTodo}>添加</button>
        <TransitionGroup>{list}</TransitionGroup>
      </div>
    )
  }
}

export default Todo
