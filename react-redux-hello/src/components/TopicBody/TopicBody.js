import React, { Component } from 'react'

class TopicBody extends Component {
  render() {
    const { comments, topic } = this.props
    return (
      <article>
        <h1>{topic.title}</h1>
        <p>{topic.content}</p>
        <span>
          评论数:
          {comments.length}
        </span>
      </article>
    )
  }
}

export default TopicBody
