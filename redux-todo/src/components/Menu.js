import React, { Component } from "react";
import styled from "styled-components";
import { getActiveNum } from "../selectors";
class Menu extends Component {
  handleClick = filter => {
    this.props.setFilter(filter);
  };
  render() {
    const { todos } = this.props;
    const num = getActiveNum(todos);
    return (
      <Wrap>
        <span> {num} items left</span>
        <div>
          <button
            onClick={() => {
              this.handleClick("all");
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              this.handleClick("active");
            }}
          >
            Active
          </button>
          <button
            onClick={() => {
              this.handleClick("completed");
            }}
          >
            Completed
          </button>
        </div>
      </Wrap>
    );
  }
}

export default Menu;
const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
