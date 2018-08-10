import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './global.css'
import './app.css'
class App extends Component {
  // 组件内的 render 方法作用就是将 方法的返回值渲染到虚拟的 App dom 节点上
  // render 方法下的 return 返回的节点必须包裹在一个节点下意思就是只能返回一个节点,
  render() {
    return (
      <div className="wrap">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
