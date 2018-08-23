import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    const { topics } = this.props
    const topicList = topics.map(topic => (
      <li key={topic.id}>
        <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
      </li>
    ))
    return (
      <div>
        <ul>{topicList}</ul>
      </div>
    )
  }
}

export default Home
