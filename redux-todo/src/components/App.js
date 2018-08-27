import React, { Component } from 'react'
import '../assets/global.css'
import MainContainer from '../containers/MainContainer'
import axios from 'axios'
// import store from "../store";
import { getTodos } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount = () => {
    const uri = 'http://localhost:3008/todos'
    axios.get(uri).then(res => {
      // store.dispatch(getTodos(res.data));
      this.props.getTodos(res.data)
    })
  }
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    )
  }
}

export default connect(
  null,
  { getTodos }
)(App)
