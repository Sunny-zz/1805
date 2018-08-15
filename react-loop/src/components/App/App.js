import React, { Component } from 'react'
import './app.css'
class App extends Component {
  state = {
    left: 0
  }
  handleClick = ind => {
    this.setState({
      left: ind
    })
  }
  handleLeft = () => {
    const { left } = this.state
    const newLeft = left > 0 ? left - 1 : 3
    this.setState({
      left: newLeft
    })
  }
  handleRight = () => {
    const { left } = this.state
    const newLeft = left < 3 ? left + 1 : 0
    this.setState({
      left: newLeft
    })
  }
  render() {
    const { left } = this.state
    return (
      <div className="show">
        <div className="pic" style={{ marginLeft: left * -590 }}>
          <img
            src="https://m.360buyimg.com/babel/jfs/t23242/156/1867609779/92790/34d973ea/5b6bfec5N183c91fd.jpg"
            alt=""
          />
          <img
            src="https://img1.360buyimg.com/da/jfs/t24820/346/370422046/99803/51c1a398/5b6d570dNb4d54774.jpg"
            alt=""
          />
          <img
            src="https://img1.360buyimg.com/pop/jfs/t21208/148/2288664594/136071/e500202d/5b4d9546Nc82dc403.jpg"
            alt=""
          />
          <img
            src="https://m.360buyimg.com/babel/jfs/t24496/139/1798597395/96957/54acb084/5b6ab180N3267cc7b.jpg"
            alt=""
          />
        </div>
        <ul className="list">
          <li>
            <a
              onClick={() => {
                this.handleClick(0)
              }}
              href="javascript:;"
              className={`box ${left === 0 ? 'active' : ''}`}
            />
          </li>
          <li>
            <a
              onClick={() => {
                this.handleClick(1)
              }}
              href="javascript:;"
              className={`box ${left === 1 ? 'active' : ''}`}
            />
          </li>
          <li>
            <a
              onClick={() => {
                this.handleClick(2)
              }}
              href="javascript:;"
              className={`box ${left === 2 ? 'active' : ''}`}
            />
          </li>
          <li>
            <a
              onClick={() => {
                this.handleClick(3)
              }}
              href="javascript:;"
              className={`box ${left === 3 ? 'active' : ''}`}
            />
          </li>
        </ul>
        <span className="left" onClick={this.handleLeft}>
          {'<'}
        </span>
        <span className="right" onClick={this.handleRight}>
          >
        </span>
      </div>
    )
  }
}

export default App
