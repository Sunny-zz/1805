import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
// import Reactx from '../Reactx/Reactx'
// import Vuex from '../Vuex/Vuex'
import Topic from '../Topic/Topic'
class Topics extends Component {
  render() {
    return (
      <div>
        <h1>Topics</h1>
        <hr />
        <ul>
          <li>
            <Link to="/topics/1">react</Link>
          </li>
          <li>
            <Link to="/topics/2">vue</Link>
          </li>
        </ul>
        <div>
          {/* <Route path="/topics/react" component={Reactx} />
          <Route path="/topics/vue" component={Vuex} /> */}
          {/* 因为展示文章的组件除了文章内容不一样其他都一样所以要写成一个组件 就是 Topic，但是页面上的路径是变化的 所以 Route 下的 path 路径就要是变化的，这就需要使用路由参数了, 相当于在路径上添加变量使用 ：变量名 */}
          {/* () => <div>文章展示首页</div> 被称作函数式组件 */}
          {/* 只要是路由组件都被路由 Route 包裹了，比如 Topic 组件。该组件会默认接收 Route 传递的数据，存到组件的 props 中 */}
          {/* 路由组件接收 props 对象包括三大属性 history 历史记录用来做返回 
          location 当前页面 url 的相关信息    match react 路由相关信息 */}
          <Route path="/topics/:topicId" component={Topic} />
          <Route path="/topics" exact render={() => <div>文章展示首页</div>} />
        </div>
      </div>
    )
  }
}

export default Topics
