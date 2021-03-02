import React, { Component } from 'react';

import confLogo from '../img/badge-header.svg';
import twitterLogo from '../img/twitter.svg';
// import uruguayFlag from '../img/uruguay.svg';
import Gravatar from './Gravatar';

class Badge extends Component {
    render() {
        const {
            fname,
            lname,
            email,
            jtitle,
            twitter
        } = this.props;
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Header Platzi Conf" />
                </div>
                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={email} fname={fname} lname={lname} />
                    <h2>{fname || 'First name'}<br />{lname || 'Last name'}</h2>
                </div>
                <div className="Badge__section-info">
                    <h3>{jtitle || 'Your job title'}</h3>
                    <p>
                        <img src={twitterLogo} alt="Twitter Logo" />
                        <a href={twitter ? `https://www.twitter.com/${twitter}/` : '#'}>
                            @{twitter || 'twitter_username'}
                        </a>
                        {/* <img src={uruguayFlag} alt="Uruguay Flag" /> */}
                    </p>
                </div>
                <div className="Badge__footer">
                    <p>#PlatziConf</p>
                </div>
            </div>
        );
    }
}

export default Badge;