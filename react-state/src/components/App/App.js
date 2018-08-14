import React, { Component } from 'react'

class App extends Component {
  // 使用 constructor 定义组件的 state，但是这种写法已经过时了
  // constructor() {
  //   super()
  //   this.state = {
  //     num: 4
  //   }
  // }
  // 现在使用以下写法 定义state 这种写法需要环境支持
  state = {
    num: 3
  }
  add = () => {
    // 如何修改 state
    // 使用 setState 修改 state
    // console.log(this.state)
    // react 组件的 state 遵循不变性原则不能直接对 state 进行修改

    this.setState({
      num: this.state.num + 1
    })
    // 因为 setState 是异步操作，所以在修改之后不能直接输出。下面输出的依然是上一次的 state，如果想查看更新之后的 state 需要在 render 函数内输出。因为只要 state 变，render 就会重新执行（并不会把所有的重新渲染只会重新渲染 改变的 state 相关的 ui）。
    console.log(this.state.num)
  }
  sub = () => {
    const { num } = this.state
    if (num > 1) {
      this.setState({
        num: num - 1
      })
    }
  }
  render() {
    // react 之中想让组件的 ui 发生变化，要将变化的内容使用 state 去控制
    // 非必要情况下：不要使用原声或第三方工具获取真实的 dom 节点进行操作操作
    const { num } = this.state
    console.log(num)
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{num}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

export default App
