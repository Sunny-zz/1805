import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import Tool from '../Tool/Tool'
class CustomPie extends Component {
  render() {
    const data = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 }
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
    return (
      <div>
        <PieChart
          width={400}
          height={240}
          onMouseEnter={this.onPieEnter}
          style={{ margin: '0 auto' }}
        >
          <Pie
            data={data}
            cx={200}
            cy={120}
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            label={true}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<Tool />} />
        </PieChart>
      </div>
    )
  }
}

export default CustomPie
