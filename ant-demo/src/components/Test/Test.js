import React, { Component } from 'react'

class Test extends Component {
  render() {
    // props 下有个 children 属性 接收的父组件在两个组件标签之间传递的内容
    console.log(this.props)
    return <div>app</div>
  }
}

export default Test
