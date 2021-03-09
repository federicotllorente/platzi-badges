import React from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../img/badge-header.svg';
import BadgesList from '../components/BadgesList';

function BadgesViews(props) {
    return (
        <div className="Badges">
            <div className="Badges__hero">
                <div className="Badges__container">
                    <img className="Badges_conf-logo" src={confLogo} alt="Logo PlatziConf" />
                </div>
            </div>
            <div className="Badges__container">
                <div className="Badges__buttons">
                    <h1>Badges</h1>
                    <Link to="/badges/new">Create a New Badge</Link>
                </div>
                <BadgesList listData={props.data} isLoading={props.loading} />
            </div>
        </div>
    );
}

export default BadgesViews;