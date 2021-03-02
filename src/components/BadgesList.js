import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import twitterLogo from '../img/twitter.svg';

class BadgesList extends Component {
    render() {
        if (this.props.isLoading) {
            return (
                <div className="BadgesList">
                    <ul>
                        <li className="BadgesList__item">
                            <img className="BadgesList__item__avatar" src="https://mir-s3-cdn-cf.behance.net/user/276/2aa2be101429359.5fe347ac143e2.png" alt="Avatar" />
                            <div className="BadgesList__item__content">
                                <h2>Nombre Apellido</h2>
                                <p>
                                    <img src={twitterLogo} alt="Twitter Logo" />
                                    <a href={"https://www.twitter.com/federicotllorente/"}>@federicotllorente</a>
                                </p>
                                <h3>Job title</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            );
        }
        if (this.props.listData.length === 0) {
            return (
                <div className="Homepage__content">
                    <h1>There's no badges yet</h1>
                    <p>Do you want to create a new one? Let's try out!</p>
                    <Link to="/badges/new">Create a new Badge</Link>
                </div>
            );
        }
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