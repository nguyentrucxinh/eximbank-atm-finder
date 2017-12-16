import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="title-bar" data-responsive-toggle="realEstateMenu" data-hide-for="small">
                    <button className="menu-icon" type="button" data-toggle></button>
                    <div className="title-bar-title">Menu</div>
                </div>
                <div className="top-bar" id="realEstateMenu">
                    <div className="top-bar-left">
                        <ul className="menu" data-responsive-menu="accordion">
                            <li className="menu-text">Interplanetary</li>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/">Three</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a className="button">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
            </div>
        );
    }
}

export default Nav
