import React, { Component } from 'react'
import TopicBody from '../TopicBody/TopicBody'
import TopicComment from '../TopicComment/TopicComment'

class Topic extends Component {
  render() {
    const { comments } = this.props
    console.log(comments)
    return (
      <div>
        <TopicBody comments={comments} />
        <TopicComment comments={comments} />
      </div>
    )
  }
}

export default Topic
