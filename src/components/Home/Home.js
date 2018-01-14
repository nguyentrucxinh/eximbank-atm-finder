import React, { Component } from 'react'
import HomeFilterContainer from './HomeFilterContainer/HomeFilterContainer'
import HomeResultContainer from './HomeResultContainer/HomeResultContainer'

class Home extends Component {
  render () {
    return (
      <div>
        <HomeFilterContainer />
        <HomeResultContainer />
      </div>
    )
  }
}

export default Home
