import React from 'react';
import { Link } from 'react-router-dom';

import Gravatar from './Gravatar';
import twitterLogo from '../img/twitter.svg';

function BadgesListItem(props) {
    const { id, fname, lname, email, jtitle, twitter } = props.data;
    return (
        <li className="BadgesList__item" key={id}>
            <Gravatar className="BadgesList__item__avatar" email={email} alt={`${fname} ${lname}`} />
            <div className="BadgesList__item__content">
                <h2><Link className="AnchorWithoutStyles" to={`badges/${id}`}>{fname} {lname}</Link></h2>
                {twitter && (
                    <p>
                        <img src={twitterLogo} alt="Twitter Logo" />
                        <a href={`https://www.twitter.com/${twitter}/`}>@{twitter}</a>
                    </p>
                )}
                <h3>{jtitle}</h3>
            </div>
            <div className="BadgesList__item__buttons">
                <Link to={`badges/${id}/edit`}>Edit</Link>
                <Link to={`badges/${id}`}>Preview</Link>
            </div>
        </li>
    );
}

export default BadgesListItem;