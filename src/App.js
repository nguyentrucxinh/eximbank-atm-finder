import React, { Component } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App
