import React, { Component } from 'react'
import TopicBody from '../TopicBody/TopicBody'
import TopicComment from '../TopicComment/TopicComment'

class Topic extends Component {
  state = {
    comments: []
  }
  addComment = comment => {
    const { comments } = this.state
    if (comment.trim()) {
      this.setState({
        comments: [...comments, { comment: comment, id: comments.length + 1 }]
      })
    }
  }
  render() {
    const { comments } = this.state
    return (
      <div>
        <TopicBody />
        <TopicComment addComment={this.addComment} comments={comments} />
      </div>
    )
  }
}

export default Topic
