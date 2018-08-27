import React, { Component } from "react";
// import store from "../store";
// import { addTodo } from "../actions";
class InputText extends Component {
  state = {
    todoText: ""
  };
  handleChange = event => {
    this.setState({
      todoText: event.target.value
    });
  };
  handleClick = () => {
    const { todoText } = this.state;
    if (todoText.trim()) {
      // console.log(1)
      // store.dispatch(addTodo(todoText));
      // this.props.addTodo(todoText);
      console.log(this.props.addTodo);
      this.props.addTodo(todoText);
      this.setState({
        todoText: ""
      });
    }
  };
  render() {
    const { todoText } = this.state;
    return (
      <div>
        <input type="text" value={todoText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>提交</button>
      </div>
    );
  }
}

export default InputText;
