import React, { Component } from 'react'
import styled from 'styled-components'
class Menu extends Component {
  render() {
    return (
      <Wrap>
        <span> 0 items left</span>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </Wrap>
    )
  }
}

export default Menu
const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
