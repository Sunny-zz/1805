import React, { Component } from 'react'

class Test extends Component {
  constructor() {
    super()
    this.state = {
      text: 1
    }
    console.log('生命周期函数----- constructor --- 初始化state')
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // 必须返回一个 state
    // 实例化组件的时候 和  当组件接收新的 props 时 该生命周期函数被执行
    console.log('生命周期函数----- static getDerivedStateFromProps')
    return null
  }
  shouldComponentUpdate() {
    // 该函数必须返回一个布尔值 来控制是否更新
    console.log('生命周期函数----- shouldComponentUpdate 是否同意组件更新')
    return true
  }
  handleClick = () => {
    this.setState({
      text: this.state.text + 1
    })
  }
  render() {
    console.log('生命周期函数----- render 渲染到页面')
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        <span>{this.state.text}</span>
      </div>
    )
  }
  componentDidMount() {
    // 这个生命周期函数内 允许发送网络请求修改 state
    console.log('生命周期函数----- componentDidMount  组件装配完毕')
  }
  // 自定义代码片段
  componentDidUpdate() {
    console.log('生命周期函数----- componentDidUpdate  组件更新完毕')
  }
}

export default Test
