import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from '../Main/Main'
class App extends Component {
  render() {
    return (
      <Router>
        <Main />
      </Router>
    )
  }
}

export default App

// https://www.yuque.com/sunnyzz/react-redux
