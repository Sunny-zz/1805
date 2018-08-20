import React, { Component } from 'react'
import Home from '../Home/Home'
import Topic from '../Topic/Topic'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/topic/:id" component={Topic} />
        </div>
      </Router>
    )
  }
}

export default App
