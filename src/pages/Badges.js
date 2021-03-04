import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../img/badge-header.svg';
import mainLogo from '../img/mainLogo.svg';
import BadgesList from '../components/BadgesList';

import api from '../api';

class Badges extends Component {
    state = {
        loading: true,
        data: undefined,
        error: null
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }
    render() {
        if (this.state.error) {
            return (
                <div className="NotFound">
                    <img src={mainLogo} alt="Platzi Badges Logo" />
                    <h1>Oops!</h1>
                    <p>
                        {this.state.error.message} Please, try again later 😊
                    </p>
                    <Link to="/">Return to the Homepage</Link>
                </div>
            );
        }
        return (
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={confLogo} alt="Logo PlatziConf" />
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <h1>Badges</h1>
                        <Link to="/badges/new">Create a New Badge</Link>
                    </div>
                    <BadgesList listData={this.state.data} isLoading={this.state.loading} />
                </div>
            </div>
        );
    }
}

export default Badges;