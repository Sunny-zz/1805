import React, { Component } from 'react'
import './app.css'
class App extends Component {
  state = {
    isLogin: false,
    token: '',
    show: true
  }
  handleInput = event => {
    this.setState({
      token: event.target.value
    })
  }

  render() {
    const { isLogin, token, show } = this.state
    const loginBox = isLogin ? (
      <div>
        <img src="" alt="" />
        <button>退出</button>
      </div>
    ) : (
      <button className="login-btn">登录</button>
    )
    return (
      <div className="login">
        <header>{loginBox}</header>
        <div className="wrap" style={{ display: show ? 'block' : 'none' }}>
          <label htmlFor="token">token</label>
          <input
            type="text"
            id="token"
            className="token"
            value={token}
            onChange={this.handleInput}
          />
          <button className="sub">submit</button>
        </div>
      </div>
    )
  }
}

export default App
