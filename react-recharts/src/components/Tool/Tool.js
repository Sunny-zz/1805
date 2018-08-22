import React, { Component } from 'react'

class Tool extends Component {
  render() {
    // console.log(this.props.label)
    const { active } = this.props
    const tool = active ? (
      <div
        style={{
          width: '100px',
          height: '40px',
          lineHeight: '40px',
          textAlign: 'center',
          color: '#fff',
          fontSize: '14px',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      >
        {`${this.props.payload[0].name} : ${this.props.payload[0].value}`}
      </div>
    ) : (
      ''
    )
    return <div>{tool}</div>
  }
}

export default Tool
