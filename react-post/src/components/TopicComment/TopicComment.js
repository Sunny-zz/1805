import React, { Component } from 'react'

class TopicComment extends Component {
  state = {
    comment: ''
  }
  handleText = event => {
    this.setState({
      comment: event.target.value
    })
  }
  addComment = () => {
    const { addComment } = this.props
    const { comment } = this.state
    addComment(comment)
    this.setState({ comment: '' })
  }
  delComment = () => {
    console.log('222')
  }
  render() {
    const { currentComments } = this.props
    const { comment } = this.state
    const commentList =
      currentComments.length === 0 ? (
        <div>评论为空</div>
      ) : (
        <ul>
          {currentComments.map(comment => (
            <li key={comment.id}>
              {comment.body} <button onClick={this.delComment}>删除</button>
            </li>
          ))}
        </ul>
      )
    return (
      <div>
        <textarea value={comment} onChange={this.handleText} />
        <button onClick={this.addComment}>评论</button>
        <div>{commentList}</div>
      </div>
    )
  }
}

export default TopicComment
