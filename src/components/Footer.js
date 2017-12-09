import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row expanded callout secondary">
                    <div className="small-6 large-3 columns">
                        <p className="lead">Offices</p>
                        <ul className="menu vertical">
                            <li>
                                <a href="#">One</a>
                            </li>
                            <li>
                                <a href="#">Two</a>
                            </li>
                            <li>
                                <a href="#">Three</a>
                            </li>
                            <li>
                                <a href="#">Four</a>
                            </li>
                        </ul>
                    </div>
                    <div className="small-6 large-3 columns">
                        <p className="lead">Solar Systems</p>
                        <ul className="menu vertical">
                            <li>
                                <a href="#">One</a>
                            </li>
                            <li>
                                <a href="#">Two</a>
                            </li>
                            <li>
                                <a href="#">Three</a>
                            </li>
                            <li>
                                <a href="#">Four</a>
                            </li>
                        </ul>
                    </div>
                    <div className="small-6 large-3 columns">
                        <p className="lead">Contact</p>
                        <ul className="menu vertical">
                            <li>
                                <a href="#">
                                    <i className="fi-social-twitter"></i> Twitter</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fi-social-facebook"></i> Facebook</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fi-social-instagram"></i> Instagram</a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fi-social-pinterest"></i> Pinterest</a>
                            </li>
                        </ul>
                    </div>
                    <div className="small-6 large-3 columns">
                        <p className="lead">Offices</p>
                        <ul className="menu vertical">
                            <li>
                                <a href="#">One</a>
                            </li>
                            <li>
                                <a href="#">Two</a>
                            </li>
                            <li>
                                <a href="#">Three</a>
                            </li>
                            <li>
                                <a href="#">Four</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="medium-6 columns">
                        <ul className="menu">
                            <li>
                                <a href="#">Legal</a>
                            </li>
                            <li>
                                <a href="#">Partner</a>
                            </li>
                            <li>
                                <a href="#">Explore</a>
                            </li>
                        </ul>
                    </div>
                    <div className="medium-6 columns">
                        <ul className="menu float-right">
                            <li className="menu-text">Copyright</li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer
