import React, { Component } from 'react'

class Topic extends Component {
  render() {
    // console.log(this.props.match.params.topicId)
    const { topicId } = this.props.match.params
    // 通过 props 获取文章 id 也就是路由参数
    return (
      <div>
        <h2>{topicId}</h2>
      </div>
    )
  }
}

export default Topic
