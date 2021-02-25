import React, { Component } from 'react';

import confLogo from '../img/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
    state = {
        form: {
            fname: '',
            lname: '',
            email: '',
            jtitle: '',
            twitter: ''
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    render() {
        return (
            <div className="BadgeNew">
                <Navbar />
                <div className="BadgeNew__hero">
                    <img src={confLogo} alt="Logo Platzi Conf" />
                </div>
                <div className="BadgeNew__container">
                    <Badge
                        firstName={this.state.form.fname}
                        lastName={this.state.form.lname}
                        email={this.state.form.email}
                        jobTitle={this.state.form.jtitle}
                        twitter={this.state.form.twitter}
                        avatarUrl='https://mir-s3-cdn-cf.behance.net/user/276/2aa2be101429359.5fe347ac143e2.png'
                        twitterUrl='https://www.twitter.com/federicotllorente/'
                    />
                    <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                </div>
            </div>
        );
    }
}

export default BadgeNew;