import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Topics from '../Topics/Topics'
import NotFound from '../NotFound/NotFound'
class Main extends Component {
  render() {
    // Redirect 重定向路由组件 当你访问一个没有路由匹配的路径时，我们希望页面的地址变成 404 并展示 404 组件
    // Redirect 使用 form 错误的地址(通常写成 /*)  to 重定向后的路由地址
    // 但是由于 from 写成了 /* 会有多次匹配 所以要使用 Switch 路由组件，
    // Switch 路由组件 下包裹的路由只能匹配一个
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/404" component={NotFound} />
          <Redirect from="/*" to="/404" />
        </Switch>
      </div>
    )
  }
}

export default Main
