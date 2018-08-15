import React, { Component } from 'react'

class App extends Component {
  render() {
    const users = [
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
        age: 22
      },
      {
        name: 'wq',
        age: 23
      }
    ]
    const lists =
      users.length === 0 ? (
        <div>数据为空</div>
      ) : (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      )
    // react 的标签数组直接写在 jsx 内，自动渲染
    return <div>{lists}</div>
  }
}

export default App
