import React, { Component } from 'react';

import confLogo from '../img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends Component {
    state = {
        loading: false,
        error: null,
        form: {
            fname: '',
            lname: '',
            email: '',
            jtitle: '',
            twitter: ''
        }
    };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };
    render() {
        if (this.state.loading) {
            return (
                <div className="loader"></div>
            );
        }
        return (
            <div className="BadgeNew">
                <div className="BadgeNew__hero">
                    <img src={confLogo} alt="Logo Platzi Conf" />
                </div>
                <div className="BadgeNew__container">
                    <Badge
                        fname={this.state.form.fname}
                        lname={this.state.form.lname}
                        email={this.state.form.email}
                        jtitle={this.state.form.jtitle}
                        twitter={this.state.form.twitter}
                    />
                    <BadgeForm onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form} />
                </div>
                {this.state.error && (
                    <div className="error_modal">
                        <h2>{this.state.error.message}</h2>
                        <p>Sorry, but there was an error.</p>
                        <p>Please try again in a moment 😊</p>
                    </div>
                )}
            </div>
        );
    }
}

export default BadgeNew;