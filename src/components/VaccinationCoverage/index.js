// Write your code here
import './index.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import {Component} from 'react'

class BarChartComp extends Component {
  render() {
    const {info} = this.props
    const DataFormatter = number => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
    return (
      <div className="barchart">
        <h1 className="coverageClass">Vaccination Coverage</h1>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={info}
            margin={{
              top: 5,
            }}
          >
            <XAxis
              dataKey="vaccine_date"
              tick={{
                stroke: 'gray',
                strokeWidth: 2,
              }}
            />
            <YAxis
              tickFormatter={DataFormatter}
              tick={{
                stroke: 'gray',
                strokeWidth: 2,
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar dataKey="dose_1" name="Dose1" fill="#1f77b4" barSize="40%" />
            <Bar dataKey="dose_2" name="Dose2" fill="#fd7f0e" barSize="40%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default BarChartComp
