// Write your code here
import './index.css'
import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

class CharByGender extends Component {
  render() {
    const {info} = this.props
    console.log(info)
    return (
      <div className="barchart2">
        <h1 className="coverageClass2">Vaccination by Gender</h1>
        <>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="70%"
                cy="40%"
                data={info}
                startAngle={0}
                endAngle={180}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="Male" fill="#f54394" />
                <Cell name="Female" fill="#5a8dee " />
                <Cell name="Others" fill=" #2cc6c6" />
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
export default CharByGender
