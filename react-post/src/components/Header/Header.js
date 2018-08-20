import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <span>首页</span>
          </Link>
        </h1>
      </div>
    )
  }
}

export default Header
