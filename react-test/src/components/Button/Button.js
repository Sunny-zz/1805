import React, { Component } from 'react'
import './button.css'
// 组件可以接收父组件传递过来的 props
// 多个子组件在父组件中使用的时候(复用)可能样式或内容不同但是大部分是相同的，此时我们可以使用组件的 props 来改变组件的样子
// 子组件如何接收父组件传递的 props 在组件内部 使用 this.props 可以获取
// 组件中 this 指的是 实例化之后的 <Button />
// 组件的 props 是只读的
class Button extends Component {
  render() {
    const { text, color } = this.props

    return (
      <button className="btn" style={{ color: color }}>
        {text}
      </button>
    )
  }
}

export default Button
