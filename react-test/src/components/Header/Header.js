import React, { Component } from 'react'
import './header.css'
import Button from '../Button/Button'
// import logo from '../../images/Morethan_logo.png'
class Header extends Component {
  singIn() {
    alert('登录')
  }
  logoClick(a) {
    console.log(a)
  }
  // logoClick 想要作为点击事件的函数， 并且这个函数需要传参。
  // 就不能直接将 img 的 onClick = {this.logoClick(1)},相当于 onClick 被赋值成一个值了，并不是函数了
  // 我们将调用 logoClick 的函数调用 放在一个匿名函数内 赋值给 img 的 onClick 属性，这样这个匿名函数就成为了事件函数，需要注意的是我们要在匿名函数内调用 Header 类的 logoClick 方法需使用 this.logoClick ,所以我们要将匿名函数写成 es6 的箭头函数，以为箭头函数 this 声明的时候就绑定了。如果使用普通函数找不到 this。
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img
              src="http://image.morethan.cc/template/index/default/css/images/Morethan_logo.png"
              alt=""
              onClick={() => {
                this.logoClick(1)
              }}
            />
          </div>
          <div>
            {/* 父组件如何向子组件传递 props  在组件标签内部传递当做组件的属性传递*/}
            <Button text="登录" color="red" click={this.singIn} />
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
