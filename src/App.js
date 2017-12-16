import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import 'foundation-sites/dist/css/foundation.min.css'
import 'foundation-icons/foundation-icons.css'
import 'foundation-sites/dist/js/foundation.min.js'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    );
  }
}

export default App
