import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'
const MainContaner = props => <Main {...props} />
const mapStateToProps = state => ({
  filter: state.filter,
  todos: state.todos
})
export default connect(mapStateToProps)(MainContaner)
