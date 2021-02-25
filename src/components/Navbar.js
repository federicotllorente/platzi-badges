import React, { Component } from 'react';

import logo from '../img/logo.svg';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <a href="/">
                    <img src={logo} alt="Logo Platzi Conf" />
                    <p>Platzi<span>Conf</span><span className="mask"></span></p>
                </a>
            </div>
        );
    }
}

export default Navbar;