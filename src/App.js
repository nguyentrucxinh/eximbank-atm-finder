import React, { Component } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import FormSearchContainer from './containers/FormSearchContainer'
import TableResultContainer from './containers/TableResultContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FormSearchContainer />
        <TableResultContainer />
        <Footer />
      </div>
    );
  }
}

export default App
