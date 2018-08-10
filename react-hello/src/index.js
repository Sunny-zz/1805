import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// 将 App 渲染到 root 下
// App 是一个 react 组件 指的就是 react虚拟出来的一个 dom 结构
// react-dom 包 作用
// 导入 react-dom 使用， ReactDOM.render方法 将 App 渲染都 root下
// 将虚拟的 react dom 节点渲染到真实的 dom 节点上
// react 包作用
// 允许 js 内填写 html 语法，我们将这种语法叫做 jsx 语法
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
