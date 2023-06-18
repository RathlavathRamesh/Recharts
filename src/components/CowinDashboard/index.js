// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BarChartComp from '../VaccinationCoverage'
import CharByGender from '../VaccinationByGender'
import CharByAge from '../VaccinationByAge'

class CowinDashboard extends Component {
  state = {
    isLoading: false,
    coverageData: [],
    vaccineGender: [],
    vaccineAge: [],
    failure: false,
  }

  componentDidMount() {
    this.getProduct()
  }

  getProduct = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      const lastVaccination = data.last_7_days_vaccination
      const vaccineByAge = data.vaccination_by_age
      const vacdineBygender = data.vaccination_by_gender
      const formaVaccine = lastVaccination.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      }))
      this.setState({
        isLoading: false,
        coverageData: lastVaccination,
        vaccineGender: vacdineBygender,
        vaccineAge: vaccineByAge,
      })
    } else {
      this.setState({failure: true, isLoading: false})
    }
  }

  render() {
    const {
      isLoading,
      coverageData,
      vaccineGender,
      failure,
      vaccineAge,
    } = this.state
    const showSarts = !isLoading && !failure
    return (
      <div className="DashBoard">
        <div className="small">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="webLogo"
          />
          <h1 className="heading">Co-WIN</h1>
        </div>
        <h1 className="paraText">CoWIN Vaccination in India</h1>
        {isLoading && (
          <div data-testid="loader" className="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        )}
        {failure && (
          <div className="failureView">
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="failImage"
            />
            <h1 className="failheading">Something Went Wrong</h1>
          </div>
        )}
        {showSarts && <BarChartComp info={coverageData} />}
        {showSarts && <CharByGender info={vaccineGender} />}
        {showSarts && <CharByAge info={vaccineAge} />}
      </div>
    )
  }
}
export default CowinDashboard
