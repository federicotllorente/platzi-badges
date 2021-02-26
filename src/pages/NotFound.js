import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../img/mainLogo.svg';

function NotFound() {
    return (
        <div className="NotFound">
            <img src={mainLogo} alt="Platzi Badges Logo" />
            <h1>Error 404</h1>
            <p>Not found</p>
            <Link to="/">Return to the Homepage</Link>
        </div>
    );
}

export default NotFound;