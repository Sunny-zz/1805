import React, { Component } from 'react'
import Topic from '../Topic/Topic'
import store from '../../store'

class App extends Component {
  render() {
    const hello = store.getState()
    console.log(hello)
    return (
      <div>
        <Topic />
      </div>
    )
  }
}

export default App
