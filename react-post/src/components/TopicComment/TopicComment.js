import React, { Component } from 'react'
import axios from 'axios'
class TopicComment extends Component {
  render() {
    const { currentComments } = this.props
    const commentList =
      currentComments.length === 0 ? (
        <div>评论为空</div>
      ) : (
        <ul>
          {currentComments.map(comment => (
            <li key={comment.id}>
              {comment.body} <button>删除</button>
            </li>
          ))}
        </ul>
      )
    return (
      <div>
        <textarea />
        <button>评论</button>
        <div>{commentList}</div>
      </div>
    )
  }
}

export default TopicComment
