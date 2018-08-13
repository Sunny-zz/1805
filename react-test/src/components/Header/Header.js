import React, { Component } from 'react'
import './header.css'
// import logo from '../../images/Morethan_logo.png'
class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img
              src="http://image.morethan.cc/template/index/default/css/images/Morethan_logo.png"
              alt=""
            />
          </div>
        </header>
        <header>
          <div className="logo" />
        </header>
      </div>
    )
  }
}

export default Header
