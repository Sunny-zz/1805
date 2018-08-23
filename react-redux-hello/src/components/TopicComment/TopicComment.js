import React, { Component } from 'react'
import store from '../../store'
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
    // const { addComment } = this.props
    const { comment } = this.state
    // addComment(comment)
    // this.setState({
    //   comment: ''
    // })
    // dispatch 方法 需要传递一个对象参数 一个属性是负载数据，另外一个属性type： 是 action 的类型
    store.dispatch({ type: 'ADD_COMMENT', comment: comment })
  }
  render() {
    const { comment } = this.state
    // const { comments } = this.props
    const { comments } = store.getState()
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
