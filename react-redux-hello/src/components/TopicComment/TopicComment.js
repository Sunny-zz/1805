import React, { Component } from 'react'

class TopicComment extends Component {
  state = {
    comment: ''
  }
  handleChange = event => {
    this.setState({
      comment: event.target.value
    })
  }
  handleClick = () => {
    const { addComment } = this.props
    const { comment } = this.state
    addComment(comment)
    this.setState({
      comment: ''
    })
  }
  render() {
    const { comment } = this.state
    const { comments } = this.props
    const commentBox =
      comments.length === 0 ? (
        <span>评论为空</span>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.comment}</li>
          ))}
        </ul>
      )
    return (
      <div>
        <h3>评论</h3>
        <input type="text" value={comment} onChange={this.handleChange} />
        <button onClick={this.handleClick}>评论</button>
        <div>{commentBox}</div>
      </div>
    )
  }
}

export default TopicComment
