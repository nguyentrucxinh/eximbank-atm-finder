import React, { Component } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import FilterContainer from './containers/FilterContainer'
import ResultContainer from './containers/ResultContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FilterContainer />
        <ResultContainer />
        <Footer />
      </div>
    );
  }
}

export default App
