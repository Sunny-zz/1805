import React, { Component } from 'react'
import axios from 'axios'
class Topic extends Component {
  state = {
    topic: null
  }
  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   const { topicId } = nextProps.match.params
  //   const uri = `http://localhost:3008/topics/${topicId}`
  //   let topic = null
  //   axios.get(uri).then(res => {
  //     topic = res.data
  //   })
  // }
  componentDidMount() {
    const { topicId } = this.props.match.params
    const uri = `http://localhost:3008/topics/${topicId}`
    axios.get(uri).then(res => {
      this.setState({
        topic: res.data
      })
    })
  }
  // componentWillReceiveProps 组件 props 改变的时候触发 默认有个参数 代表下一个 props
  componentWillReceiveProps = nextProps => {
    const { topicId } = nextProps.match.params
    const uri = `http://localhost:3008/topics/${topicId}`
    axios.get(uri).then(res => {
      this.setState({
        topic: res.data
      })
    })
  }

  render() {
    // console.log(this.props.match.params.topicId)
    // const { topicId } = this.props.match.params
    const { topic } = this.state
    // 通过 props 获取文章 id 也就是路由参数
    // 组件接收的 props 更新了， 要更新 state
    const article = topic ? (
      <article>
        <h3>{topic.title}</h3>
        <p>{topic.content}</p>
      </article>
    ) : (
      <div>加载中。。。</div>
    )
    return <div>{article}</div>
  }
}

export default Topic
