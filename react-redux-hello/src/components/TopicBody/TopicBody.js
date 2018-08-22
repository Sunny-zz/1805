import React, { Component } from 'react'

class TopicBody extends Component {
  render() {
    const { comments } = this.props
    return (
      <article>
        <h1>Git</h1>
        <p>sajdg asjdh asj jas d</p>
        <span>
          评论数:
          {comments.length}
        </span>
      </article>
    )
  }
}

export default TopicBody
