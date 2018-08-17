import React, { Component } from 'react'
import './app.css'
import axios from 'axios'
class App extends Component {
  state = {
    isLogin: false,
    token: '',
    show: false
  }
  componentDidMount = () => {
    // 刷新的时候可能修改 isLogin 这个 state
    // 当浏览器记录了我的登录状态时，修改 state
    const { token, username, userImg } = sessionStorage
    if (username && userImg) {
      this.setState({
        isLogin: true
      })
    }
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
      // console.log(res.data)
      // 登录成功时 要将 accesstoken 存储本地浏览中，之后刷新页面的时候我们可以判断 本地存储是否存在 accesstoken,来判断是否登录了
      // sessionStorage.token = token
      // sessionStorage.isLogin = true
      sessionStorage.username = res.data.loginname
      sessionStorage.userImg = res.data.avatar_url
      this.setState({
        show: false,
        token: '',
        isLogin: true
      })
    })
  }
  handleLoginout = () => {
    // sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('userImg')
    this.setState({
      isLogin: false
    })
  }
  // h5 的本地存储  localStorage   sessionStorage
  render() {
    const { isLogin, token, show } = this.state
    console.log(sessionStorage.userImg)
    const loginBox = isLogin ? (
      <div>
        <img src={sessionStorage.userImg} alt="" />
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
