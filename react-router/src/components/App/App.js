import React, { Component } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Main from '../Main/Main'
class App extends Component {
  render() {
    // react 路由实现  需要安装 react-router-dom 包
    // 不同的页面也就指的是不同的组件
    // 使用 react-router-dom 下的 Route 来定义路由规则 也就是跳转页面的规则
    // Route 的用法 path 代表页面的路径(匹配规则)  component 代表展示的组件  exact 严格匹配
    // 例子中将所有的路由规则 添加到了 Main 组件，然后将 Main 添加到 App 组件中展示
    // 使用 react-router-dom 下的 Link 实现页面的跳转(也就是组件的切换)
    // Link 的用法  to 代表要匹配哪一个路由规则
    // 需要注意的是 所有路由相关的组件必须包裹在 Router 下，Router 是从 react-router-dom 包中导入的 BrowserRouter 或 HashRouter(很少用)
    return (
      <Router>
        <div>
          <header>
            <nav>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </nav>
          </header>
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
