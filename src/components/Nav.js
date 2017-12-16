import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
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
            </div>
        );
    }
}

export default Nav
