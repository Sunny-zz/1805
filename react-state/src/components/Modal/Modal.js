import React, { Component } from 'react'
import './modal.css'
class Modal extends Component {
  state = {
    show: false
  }
  open = () => {
    this.setState({
      show: true
    })
  }
  close = () => {
    this.setState({ show: false })
  }
  // stop = event => {
  //   // 阻止事件冒泡  event
  //   event.stopPropagation()
  // }
  render() {
    const { show } = this.state
    return (
      <div className="modal">
        <button className="open" onClick={this.open}>
          Open
        </button>
        <div
          className="wrap"
          onClick={this.close}
          style={{ display: show ? 'block' : 'none' }}
        />
        <div style={{ display: show ? 'block' : 'none' }}>
          <div className="header">
            <h3>Basic Modal</h3>
            <span onClick={this.close}>X</span>
          </div>
          <div className="main">
            <p>some contents</p>
            <p>some contents</p>
            <p>some contents</p>
          </div>
          <div className="footer">
            <button onClick={this.close}>取消</button>
            <button onClick={this.close}>确定</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
