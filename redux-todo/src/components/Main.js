import React, { Component } from 'react'
import styled from 'styled-components'
import { lightBlue } from '../constants/colors'
import InputText from './InputText'
import TodoList from './TodoList'
import Menu from './Menu'
class Main extends Component {
  render() {
    return (
      <Wrap>
        <Title>TODO</Title>
        <InputText />
        <TodoList />
        <Menu />
      </Wrap>
    )
  }
}

export default Main

const Wrap = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${lightBlue};
  margin: 0 auto;
  padding: 20px 60px;
`
const Title = styled.h1`
  color: #fff;
`
