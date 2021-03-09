import React, { Component } from 'react';

import BadgeNewViews from '../views/BadgeNewViews';
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
            <BadgeNewViews
                error={this.state.error}
                form={this.state.form}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
        );
    }
}

export default BadgeNew;