// 组件的创建方式
// 无状态（state）组件  函数式组件
// 如何接收 props： 父组件传递过来的 props 就是函数的参数
import React from 'react'
const Test = props => <button>{props.text}</button>
export default Test
