import React, { Component } from 'react'
import TopicBody from '../TopicBody/TopicBody'
import TopicComment from '../TopicComment/TopicComment'
import shortId from 'shortid'
import store from '../../store'
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
    console.log(store.getState())
    return (
      <div>
        <TopicBody comments={comments} />
        <TopicComment addComment={this.addComment} comments={comments} />
      </div>
    )
  }
}

export default Topic
