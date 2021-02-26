import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../img/sec_logo.svg';
import mainLogo from '../img/mainLogo.svg';

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <div className="Homepage__content">
                    <img src={confLogo} alt="Logo PlatziConf" />
                    <h1>Print your Badges</h1>
                    <p>The easiest way to manage your conference</p>
                    <Link to="/badges">Start now</Link>
                </div>
                <img src={mainLogo} alt="Platzi Badges Logo" />
            </div>
        );
    }
}

export default Homepage;