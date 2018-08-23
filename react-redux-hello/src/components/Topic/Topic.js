import React, { Component } from 'react'
import TopicBody from '../TopicBody/TopicBody'
import TopicComment from '../TopicComment/TopicComment'

class Topic extends Component {
  render() {
    const { comments, topics } = this.props
    const { id } = this.props.match.params
    const topic = topics.find(topic => topic.id === id)
    const currentComments = comments.filter(comment => comment.topicId === id)
    return (
      <div>
        <TopicBody comments={currentComments} topic={topic} />
        <TopicComment comments={currentComments} />
      </div>
    )
  }
}

export default Topic
