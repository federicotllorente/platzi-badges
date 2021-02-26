import React, { Component } from 'react';

import twitterLogo from '../img/twitter.svg';

class BadgesList extends Component {
    render() {
        return (
            <div className="BadgesList">
                <ul>
                    {this.props.listData.map(el => {
                        return (
                            <li className="BadgesList__item" key={el.id}>
                                <img className="BadgesList__item__avatar" src={el.avatarUrl} alt="Avatar" />
                                <div className="BadgesList__item__content">
                                    <h2>{el.fname} {el.lname}</h2>
                                    <p>
                                        <img src={twitterLogo} alt="Twitter Logo" />
                                        <a href={"https://www.twitter.com/" + el.twitter + "/"}>@{el.twitter}</a>
                                    </p>
                                    <h3>{el.jtitle}</h3>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;