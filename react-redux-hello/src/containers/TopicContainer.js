import React from 'react'
import { connect } from 'react-redux'
import Topic from '../components/Topic/Topic'

const TopicContainer = props => <Topic {...props} />
const mapStateToProps = state => ({
  comments: state.comments,
  topics: state.topics
})

export default connect(mapStateToProps)(TopicContainer)
