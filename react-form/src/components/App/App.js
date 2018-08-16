import React, { Component } from 'react'
import './app.css'
import axios from 'axios'
class App extends Component {
  state = {
    isLogin: false,
    token: '',
    show: false
  }
  handleInput = event => {
    this.setState({
      token: event.target.value
    })
  }
  handleLoginBtn = () => {
    this.setState({
      show: true
    })
  }
  handleSubmit = () => {
    const uri = 'https://cnodejs.org/api/v1/accesstoken'
    const { token } = this.state
    axios.post(uri, { accesstoken: token }).then(res => {
      console.log(res.data)
      this.setState({
        show: false,
        token: '',
        isLogin: true
      })
    })
  }
  handleLoginout = () => {
    this.setState({
      isLogin: false
    })
  }
  // h5 的本地存储  localStorage   sessionStorage
  render() {
    const { isLogin, token, show } = this.state
    const loginBox = isLogin ? (
      <div>
        <img src="" alt="" />
        <button className="loginout" onClick={this.handleLoginout}>
          退出
        </button>
      </div>
    ) : (
      <button className="login-btn" onClick={this.handleLoginBtn}>
        登录
      </button>
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
          <button className="sub" onClick={this.handleSubmit}>
            submit
          </button>
        </div>
      </div>
    )
  }
}

export default App
