import React, { Component } from 'react';

import BadgesDetailsViews from '../views/BadgesDetailsViews';
import api from '../api';

class BadgeDetails extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        isOpen: false
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };
    handleCloseModal = e => {
        this.setState({ isOpen: false });
    };
    handleOpenModal = e => {
        this.setState({ isOpen: true });
    };
    deleteBadge = async () => {
        this.setState({ loading: true, error: null });
        try {
            this.setState({ loading: false });
            await api.badges.remove(this.props.match.params.badgeId);
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
            <BadgesDetailsViews
                error={this.state.error}
                data={this.state.data}
                isOpen={this.state.isOpen}
                badgeId={this.props.match.params.badgeId}
                handleOpenModal={this.handleOpenModal}
                handleCloseModal={this.handleCloseModal}
                deleteBadge={this.deleteBadge}
            />
        );
    }
}

export default BadgeDetails;