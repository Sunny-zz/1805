import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Topics from '../Topics/Topics'
class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    )
  }
}

export default Main
