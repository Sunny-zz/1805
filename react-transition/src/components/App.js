import React, { Component } from 'react'
// import Fade from './Fade'
import CSSTransition from 'react-transition-group/CSSTransition'
import './app.css'
import Todo from './Todo'
class App extends Component {
  state = {
    in: false,
    showValidationMessage: false,
    showValidationButton: true
  }
  toggleEnterState = () => {
    this.setState({ in: true })
  }
  handelClick = () => {
    this.setState({
      showValidationMessage: true,
      showValidationButton: false
    })
  }
  render() {
    const { showValidationMessage, showValidationButton } = this.state
    return (
      <div>
        {/* <Fade in={this.state.in} />
        <button onClick={this.toggleEnterState}>Click to Enter</button> */}
        <CSSTransition
          in={showValidationMessage}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
          {state => <div className="message">Your name rocks!</div>}
        </CSSTransition>
        <CSSTransition
          in={showValidationButton}
          timeout={0}
          classNames="button"
          unmountOnExit
        >
          {state => <button onClick={this.handelClick}>Click me!</button>}
        </CSSTransition>
        <Todo />
      </div>
    )
  }
}

export default App
