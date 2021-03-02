import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import twitterLogo from '../img/twitter.svg';
import BadgesListSkeleton from './BadgesListSkeleton';
import Gravatar from './Gravatar';

class BadgesList extends Component {
    render() {
        if (this.props.isLoading) {
            // The 'quantity' prop is how many skeleton items are shown when the app is fetching the data
            return (
                <BadgesListSkeleton quantity="3" />
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
        const reverseListData = [...this.props.listData].reverse();
        return (
            <div className="BadgesList">
                <ul>
                    {reverseListData.map(el => {
                        return (
                            <li className="BadgesList__item" key={el.id}>
                                <Gravatar className="BadgesList__item__avatar" email={el.email} alt={`${el.fname} ${el.lname}`} />
                                <div className="BadgesList__item__content">
                                    <h2>{el.fname} {el.lname}</h2>
                                    {el.twitter && (
                                        <p>
                                            <img src={twitterLogo} alt="Twitter Logo" />
                                            <a href={`https://www.twitter.com/${el.twitter}/`}>@{el.twitter}</a>
                                        </p>
                                    )}
                                    <h3>{el.jtitle}</h3>
                                </div>
                                <div className="BadgesList__item__buttons">
                                    <Link to={`badges/${el.id}/edit`}>Edit</Link>
                                    <Link to={`badges/${el.id}/delete`}>Delete</Link>
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