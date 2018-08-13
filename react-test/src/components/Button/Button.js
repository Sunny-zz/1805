import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './button.css'
// 组件可以接收父组件传递过来的 props
// 多个子组件在父组件中使用的时候(复用)可能样式或内容不同但是大部分是相同的，此时我们可以使用组件的 props 来改变组件的样子
// 子组件如何接收父组件传递的 props 在组件内部 使用 this.props 可以获取
// 组件中 this 指的是 实例化之后的 <Button />
// 组件的 props 是只读的
class Button extends Component {
  render() {
    // 设置 props 的默认值
    // 方案 1
    // let { text, color } = this.props
    // if (!text) {
    //   text = '按钮'
    // }
    // 方案 2
    // const defaultProps = {
    //   text: '按钮',
    //   color: '#000'
    // }
    // const { color, text } = { ...defaultProps, ...this.props }
    // 方案 3
    const { text, color } = this.props
    // 使用 react包下的 prop-types 一个方法设置 组件的默认 props
    // 第一步 引入 prop-types 默认导入为 PropTypes
    // 第二步 在组件外部,也就是 class 外使用 Button.defaultProps 属性设置默认的 props
    // 第三步 使用 Button.propTypes 设置默认 props 的类型
    // note: 只设置 props 默认值的话不需要执行第一步，设置类型需要第一步
    return (
      <button className="btn" style={{ color: color }}>
        {text}
      </button>
    )
  }
}

export default Button

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}
Button.defaultProps = {
  text: '按钮',
  color: '#000'
}
