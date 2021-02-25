import React, { Component } from 'react';

import confLogo from '../img/badge-header.svg';
import twitterLogo from '../img/twitter.svg';
import uruguayFlag from '../img/uruguay.svg';

class Badge extends Component {
    render() {
        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter,
            twitterUrl
        } = this.props;
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Header Platzi Conf" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={avatarUrl} alt="Avatar perfil" />
                    <h2>{firstName}<br />{lastName}</h2>
                </div>
                <div className="Badge__section-info">
                    <h3>{jobTitle}</h3>
                    <p>
                        <img src={twitterLogo} alt="Twitter Logo" />
                        <a href={twitterUrl}>@{twitter}</a>
                        <img src={uruguayFlag} alt="Uruguay Flag" />
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