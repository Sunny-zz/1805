import React, { Component } from 'react'
import Test from '../Test/Test'
import axios from 'axios'

// 组件的生命周期
class App extends Component {
  state = {
    users: [],
    show: '全部'
  }
  showAll = () => {
    this.setState({
      show: '全部'
    })
  }
  showSome = () => {
    this.setState({
      show: '大于21'
    })
  }
  componentDidMount = () => {
    const uri = 'http://localhost:3008/users'
    axios.get(uri).then(res => {
      this.setState({
        users: res.data
      })
    })
  }

  render() {
    // 展示 大于 22 岁的所有人名
    // const lists =
    //   users.length === 0 ? (
    //     <div>数据为空</div>
    //   ) : (
    //     <ul>
    //       {users.filter(user => user.age >= 22).map(user => (
    //         <li>{user.name}</li>
    //       ))}
    //     </ul>
    //   )
    // react 的标签数组直接写在 jsx 内，自动渲染
    // 因为自动生成的列表是由 state 控制的生成了多个 react 的 dom 结构，同时生成的多个相同节点需要给每个节点设置 key 属性，以便底层处理 (key 属性的属性值不能相同，通常设置为数据的 id )。
    const { show, users } = this.state
    const listsArr =
      show === '全部' ? users : users.filter(user => user.age > 21)
    const lists =
      listsArr.length === 0 ? (
        <span>空</span>
      ) : (
        <ul>
          {listsArr.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )
    return (
      <div>
        <button onClick={this.showAll}>全部</button>
        <button onClick={this.showSome}>大于21</button>
        <div>{lists}</div>
        <Test />
      </div>
    )
  }
}

export default App
