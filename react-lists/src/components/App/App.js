import React, { Component } from 'react'
import Test from '../Test/Test'

// 组件的生命周期
class App extends Component {
  state = {
    users: [
      {
        name: 'zzt',
        age: 20
      },
      {
        name: 'cwz',
        age: 21
      },
      {
        name: 'ym',
        age: 21
      },
      {
        name: 'wq',
        age: 20
      }
    ],
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
    const { show, users } = this.state
    const listsArr =
      show === '全部' ? users : users.filter(user => user.age > 21)
    const lists =
      listsArr.length === 0 ? (
        <span>空</span>
      ) : (
        <ul>
          {listsArr.map(user => (
            <li>{user.name}</li>
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
