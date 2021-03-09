import React, { Component } from 'react';

import BadgeEditViews from '../views/BadgeEditViews';
import api from '../api';

class BadgeEdit extends Component {
    state = {
        loading: true,
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
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false });
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, form: data });
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
            <BadgeEditViews
                error={this.state.error}
                form={this.state.form}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
        );
    }
}

export default BadgeEdit;