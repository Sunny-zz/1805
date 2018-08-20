import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class TopicList extends Component {
  state = {
    topicList: []
  }
  componentDidMount = () => {
    const uri = 'http://localhost:3008/topics'
    axios.get(uri).then(res => {
      this.setState({
        topicList: res.data
      })
    })
  }
  render() {
    const { topicList } = this.state
    const list =
      topicList.length === 0 ? (
        <span>加载中</span>
      ) : (
        <ul>
          {topicList.map(topic => (
            <li key={topic.id}>
              <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ul>
      )
    return <div>{list}</div>
  }
}

export default TopicList
