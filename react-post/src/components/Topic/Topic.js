import React, { Component } from 'react'
import TopicBody from '../TopicBody/TopicBody'
import TopicComment from '../TopicComment/TopicComment'
import axios from 'axios'
class Topic extends Component {
  state = {
    comments: [],
    topic: null
  }
  componentDidMount = () => {
    const { id } = this.props.match.params
    const uriComment = 'http://localhost:3008/comments'
    const uriTopic = `http://localhost:3008/topics/${id}`
    axios.get(uriComment).then(res => {
      this.setState({
        comments: res.data
      })
    })
    axios.get(uriTopic).then(res => {
      this.setState({ topic: res.data })
    })
  }
  addComment = comment => {
    if (comment.trim()) {
      const { id } = this.props.match.params
      const commentObj = {
        body: comment,
        topicId: id
      }
      const uri = `http://localhost:3008/comments`
      axios.post(uri, commentObj).then(res => {
        const { comments } = this.state
        this.setState({
          comments: [...comments, res.data]
        })
      })
    }
  }
  delComment = id => {
    const uri = `http://localhost:3008/comments/${id}`
    axios.delete(uri).then(res => {
      const { comments } = this.state
      this.setState({
        comments: comments.filter(comment => comment.id !== id)
      })
    })
  }
  render() {
    const { comments, topic } = this.state
    const { id } = this.props.match.params

    const currentComments = comments.filter(
      comment => comment.topicId.toString() === id
    )
    return (
      <div>
        <TopicBody topic={topic} num={currentComments.length} />
        <TopicComment
          currentComments={currentComments}
          addComment={this.addComment}
          delComment={this.delComment}
        />
      </div>
    )
  }
}

export default Topic
