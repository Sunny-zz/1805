import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  state = {
    comments: []
  }
  componentDidMount = () => {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(res => {
      this.setState({
        comments: res.data
      })
    })
  }
  handleText = event => {
    this.setState({
      comment: event.target.value
    })
  }
  addComment = () => {
    const { comment, comments } = this.state
    if (comment.trim()) {
      const uri = 'http://localhost:3008/comments'
      axios.post(uri, { body: comment }).then(res => {
        // 根据返回的新的评论更新 state
        this.setState({ comments: [...comments, res.data], comment: '' })
      })
    }
  }
  render() {
    const { comments, comment } = this.state
    const commentList =
      comments.length === 0 ? (
        <span>评论为空</span>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      )
    return (
      <div>
        <div className="post-body">
          <article>
            <h1>哈哈哈</h1>
            <p>askjdg akdsg kadg</p>
          </article>
        </div>
        <div className="comment-box">
          <textarea value={comment} onChange={this.handleText} />
          <button onClick={this.addComment}>评论</button>
          <div>{commentList}</div>
        </div>
      </div>
    )
  }
}

export default App
