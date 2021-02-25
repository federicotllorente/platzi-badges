import React, { Component } from 'react';

import confLogo from '../img/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
    render() {
        return (
            <div className="BadgeNew">
                <Navbar />
                <div className="BadgeNew__hero">
                    <img src={confLogo} alt="Logo Platzi Conf" />
                </div>
                <div className="BadgeNew__container">
                    <Badge
                        firstName="Federico"
                        lastName="Tejedor"
                        avatarUrl="https://mir-s3-cdn-cf.behance.net/user/276/2aa2be101429359.5fe347ac143e2.png"
                        jobTitle="Front-end Developer"
                        twitter="federicotllorente"
                        twitterUrl="https://www.twitter.com/federicotllorente/"
                    />
                    <BadgeForm />
                </div>
            </div>
        );
    }
}

export default BadgeNew;