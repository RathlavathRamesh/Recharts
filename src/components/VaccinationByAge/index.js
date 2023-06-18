// Write your code here
import './index.css'
import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

class CharByAge extends Component {
  render() {
    const {info} = this.props
    console.log(info)
    return (
      <div className="barchart2">
        <h1 className="coverageClass2">Vaccination by Age</h1>
        <>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="70%"
                cy="40%"
                data={info}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="18-39" fill="#5a8dee" />
                <Cell name="40-60" fill="#a3df9f" />
                <Cell name="Above 60" fill=" #2cc6c6" />
              </Pie>
              <Legend
                iconType="semi-circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
            </PieChart>
          </ResponsiveContainer>
        </>
      </div>
    )
  }
}
export default CharByAge
