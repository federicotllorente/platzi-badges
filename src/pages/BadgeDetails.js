import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeDeleteModal from '../components/BadgeDeleteModal';
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
            <div className="BadgeDetails">
                <div className="BadgeDetails__hero">
                    <img src={confLogo} alt="Logo Platzi Conf" />
                    <h1>{this.state.data.fname} {this.state.data.lname}</h1>
                </div>
                <div className="BadgeDetails__container">
                    <Badge
                        fname={this.state.data.fname}
                        lname={this.state.data.lname}
                        email={this.state.data.email}
                        jtitle={this.state.data.jtitle}
                        twitter={this.state.data.twitter}
                    />
                    <div className="BadgeDetails__container__buttons">
                        <h2>Actions</h2>
                        <Link to={`${this.props.match.params.badgeId}/edit`}>Edit</Link>
                        <button onClick={this.handleOpenModal}>Delete</button>
                    </div>
                </div>
                {this.state.error && (
                    <div className="error_modal">
                        <h2>{this.state.error.message}</h2>
                        <p>Sorry, but there was an error.</p>
                        <p>Please try again in a moment 😊</p>
                    </div>
                )}
                <BadgeDeleteModal
                    isOpen={this.state.isOpen}
                    onCloseModal={this.handleCloseModal}
                    badge={this.state.data}
                    deleteBadge={this.deleteBadge}
                />
            </div>
        );
    }
}

export default BadgeDetails;