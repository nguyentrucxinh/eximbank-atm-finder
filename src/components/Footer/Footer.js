import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
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
