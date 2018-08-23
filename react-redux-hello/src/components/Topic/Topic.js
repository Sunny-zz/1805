import React, { Component } from 'react'
import TopicBody from '../TopicBody/TopicBody'
import TopicComment from '../TopicComment/TopicComment'
import shortId from 'shortid'

class Topic extends Component {
  state = {
    comments: []
  }
  addComment = comment => {
    const { comments } = this.state
    if (comment.trim()) {
      this.setState({
        comments: [...comments, { comment: comment, id: shortId() }]
      })
    }
  }
  render() {
    const { comments } = this.state
    return (
      <div>
        <TopicBody comments={comments} />
        <TopicComment />
      </div>
    )
  }
}

export default Topic
