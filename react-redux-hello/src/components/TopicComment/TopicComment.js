import React, { Component } from 'react'
import store from '../../store'
import shortId from 'shortid'
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
    const { id } = this.props
    const { comment } = this.state
    this.setState({
      comment: ''
    })
    // dispatch 方法 需要传递一个对象参数 一个属性是负载数据，另外一个属性type： 是 action 的类型
    const newComment = { id: shortId(), comment: comment, topicId: id }
    store.dispatch({ type: 'ADD_COMMENT', comment: newComment })
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

// connect 的使用 该函数需要调用两次 第一次调用需要传递一个参数 这个参数是一个函数(mapStateToProps) 第二次调用需要传递一个参数 该参数是一个 react 组件也就是想要接收某个 store 的组件
// mapStateToProps 函数默认接受一个参数 也就是 store 中的数据，该函数需要返回一个值 来作为某个组件需要的 props

export default TopicComment
