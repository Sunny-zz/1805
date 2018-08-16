import React, { Component } from 'react'

// react 中的表单(input textarea select) 要写成受控组件
class App extends Component {
  state = {
    username: '',
    comment: '',
    sex: '女'
  }
  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handleTextarea = event => {
    this.setState({ comment: event.target.value })
  }
  handleRadio = event => {
    this.setState({ sex: event.target.value })
  }
  render() {
    const { username, comment, sex } = this.state

    return (
      <div>
        {/* 非受控组件:页面中输入内容的变化不受 state 控制 */}
        {/* <label htmlFor="username">用户名</label>
        <input id="username" type="text" defaultValue="默认" /> */}
        {/* 受控组件：页面中输入内容的变化必须使用 state 控制，使用 onChange 事件修改 state ，onChange 只要输入框内容发生改变就会被触发  */}
        <label htmlFor="username">用户名</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.handleChange}
        />
        <textarea id="" value={comment} onChange={this.handleTextarea} />
        <br />
        <div>
          <span>男</span>
          <input
            name="sex"
            value="男"
            checked={sex === '男' ? true : false}
            onChange={this.handleRadio}
            type="radio"
          />
          <span>女</span>
          <input
            value="女"
            checked={sex === '女' ? true : false}
            onChange={this.handleRadio}
            name="sex"
            type="radio"
          />
        </div>
      </div>
    )
  }
}

export default App
