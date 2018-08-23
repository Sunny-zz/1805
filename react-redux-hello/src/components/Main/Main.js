import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomeContainer from '../../containers/HomeContainer'
import TopicContainer from '../../containers/TopicContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/topic/:id" component={TopicContainer} />
      </div>
    )
  }
}

export default Main
