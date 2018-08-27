import React, { Component } from 'react'
import axios from 'axios'
// import store from "../store";
// import { addTodo } from "../actions";
class InputText extends Component {
  state = {
    todoText: ''
  }
  handleChange = event => {
    this.setState({
      todoText: event.target.value
    })
  }
  handleClick = () => {
    const { todoText } = this.state
    if (todoText.trim()) {
      const uri = 'http://localhost:3008/todos'
      // console.log(1)
      // store.dispatch(addTodo(todoText));
      // this.props.addTodo(todoText);
      console.log(this.props.addTodo)
      // this.props.addTodo(todoText);
      axios.post(uri, { todoText, isCompleted: false }).then(res => {
        this.props.addTodo(res.data)
      })
      this.setState({
        todoText: ''
      })
    }
  }
  render() {
    const { todoText } = this.state
    return (
      <div>
        <input type="text" value={todoText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>提交</button>
      </div>
    )
  }
}

export default InputText
