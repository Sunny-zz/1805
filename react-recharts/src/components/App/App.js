import React, { Component } from 'react'
import './app.css'
import LineCharts from '../LineCharts/LineCharts'
import CustomPie from '../CustomPie/CustomPie'
class App extends Component {
  render() {
    return (
      <div className="app">
        <LineCharts />
        <CustomPie />
      </div>
    )
  }
}

export default App
