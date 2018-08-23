import React from 'react'
import { connect } from 'react-redux'
import Home from '../components/Home/Home'
const HomeContainer = props => <Home {...props} />
const mapStateToProps = state => ({ topics: state.topics })
export default connect(mapStateToProps)(HomeContainer)
