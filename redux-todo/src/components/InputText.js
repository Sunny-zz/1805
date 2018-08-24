import React, { Component } from 'react'
import styled from 'styled-components'
class InputText extends Component {
  state = {
    todoText: ''
  }
  handleChange = event => {
    this.setState({
      todoText: event.target.value
    })
  }
  render() {
    const { todoText } = this.state
    return (
      <div>
        <input type="text" value={todoText} onChange={this.handleChange} />
        <button>提交</button>
      </div>
    )
  }
}

export default InputText
