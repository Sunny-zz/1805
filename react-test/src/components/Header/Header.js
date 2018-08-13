import React, { Component } from 'react'
import './header.css'
import Button from '../Button/Button'
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
          <div>
            {/* 父组件如何向子组件传递 props  在组件标签内部传递当做组件的属性传递*/}
            <Button text="登录" color="red" />
            <Button text="注册" color="blue" />
            <Button />
          </div>
        </header>
        {/* <header>
          <div className="logo" />
        </header> */}
      </div>
    )
  }
}

export default Header
