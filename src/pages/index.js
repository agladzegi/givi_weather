import React from "react"
import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {

  state = {
    featured: {},
    error: ''
  }

  componentDidMount() {
    this.getInitialWeather()
  }

  getInitialWeather = async () => {
    try {
      const response = await axios.get(`${process.env.GATSBY_API_URL}/weather?id=611717&appid=${process.env.GATSBY_API_KEY}&units=metric`)
      this.setState({ featured: response.data })
      console.log(this.state.featured)
    } catch(err) {
      this.setState({ featured: {}, error: 'Ooops, Something went wrong, try again...' })
    }
  }

  onClick = (e) => {
    this.getWeather(e)
  } 

  getWeather = async (e) => {
    try {
      const response = await axios.get(`${process.env.GATSBY_API_URL}/weather?id=${e.target.value}&appid=${process.env.GATSBY_API_KEY}&units=metric`)
      this.setState({ featured: response.data })
      console.log(this.state.featured)
    } catch(err) {
      this.setState({ featured: {}, error: 'Ooops, Something went wrong, try again...' })
    }
  }
  
  render() {
    const { featured, error } = this.state
    return (
      <Layout>
        <SEO title="Givi Weather" />
        { error || !featured.name ? <h3>{error}</h3> : <div className="featured">
          <div className="weather">
            <h1>{featured.name}</h1>
            <h3>{featured.weather[0].description}</h3>
            <ul>
              <li>Max-temp: <span>{featured.main.temp_max}&deg;</span></li>
              <li>Pressure: <span>{featured.main.pressure}</span></li>
              <li>Humidity: <span>{featured.main.humidity}%</span></li>
              <li>Wind: <span>{featured.wind.speed}km/h</span></li>
            </ul>
          </div>
          <div className="temp">
            <h1>{featured.main.temp}&deg;</h1>
          </div>
        </div> }
        <div className="main">
          <button value="611717" onClick={this.onClick}>Tbilisi</button>
          <button value="615532" onClick={this.onClick}>Batumi</button>
          <button value="613607" onClick={this.onClick}>Kutaisi</button>
          <button value="612287" onClick={this.onClick}>Rustavi</button>
          <button value="610864" onClick={this.onClick}>Zestaponi</button>
          <button value="611694" onClick={this.onClick}>Telavi</button>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
