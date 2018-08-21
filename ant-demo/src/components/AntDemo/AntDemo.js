import React, { Component } from 'react'
import { Button, Carousel } from 'antd'

import Test from '../Test/Test'

class AntDemo extends Component {
  handleClick = arrow => {
    // ref 在父组件中 获取子组件的 this 执行this下的方法
    arrow === 'left' ? this.car.prev() : this.car.next()
  }
  render() {
    return (
      <div className="app">
        <div style={{ width: '590px', position: 'relative' }}>
          <Carousel ref={car => (this.car = car)} effect="fade">
            <div>
              <img
                src="https://m.360buyimg.com/babel/jfs/t23875/320/2276169792/101933/6e7e7131/5b7a3a4dN609ccb7a.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://img1.360buyimg.com/pop/jfs/t23212/82/2257083269/94745/34ebd209/5b7a249aN8cb1b46b.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://img1.360buyimg.com/pop/jfs/t23284/26/2296399396/65383/f70505cc/5b7aba48Nca0af09b.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://m.360buyimg.com/babel/jfs/t23098/137/2298125939/90866/f6964d72/5b7a7583Na12aa3ef.jpg"
                alt=""
              />
            </div>
          </Carousel>
          <Button
            style={{ left: 0 }}
            onClick={() => this.handleClick('left')}
            className="btn"
          >
            prev
          </Button>
          <Button
            style={{ right: 0 }}
            onClick={() => this.handleClick('right')}
            className="btn"
          >
            next
          </Button>
        </div>
        <Button>
          <span>askdjh skj ksh </span>
        </Button>
        <Test title="123">123</Test>
      </div>
    )
  }
}

export default AntDemo
