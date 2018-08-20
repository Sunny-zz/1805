import React, { Component } from 'react'
import TopicBody from '../TopicBody/TopicBody'
import TopicComment from '../TopicComment/TopicComment'
import axios from 'axios'
class Topic extends Component {
  state = {
    comments: [],
    topic: null
  }
  componentDidMount = () => {
    const { id } = this.props.match.params
    const uriComment = 'http://localhost:3008/comments'
    const uriTopic = `http://localhost:3008/topics/${id}`
    axios.get(uriComment).then(res => {
      this.setState({
        comments: res.data
      })
    })
    axios.get(uriTopic).then(res => {
      this.setState({ topic: res.data })
    })
  }
  render() {
    const { comments, topic } = this.state
    const id = topic ? topic.topicId : undefined
    const currentComments = comments.filter(comment => comment.topicId === id)
    return (
      <div>
        <TopicBody topic={topic} />
        <TopicComment currentComments={currentComments} />
      </div>
    )
  }
}

export default Topic
