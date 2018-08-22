import React, { Component } from 'react'

class Tool extends Component {
  render() {
    console.log(this.props.label)
    const { active } = this.props
    const tool = active ? (
      <div>
        {`${this.props.payload[0].name}:${this.props.payload[0].value}`}
      </div>
    ) : (
      ''
    )
    return <div>{tool}</div>
  }
}

export default Tool
