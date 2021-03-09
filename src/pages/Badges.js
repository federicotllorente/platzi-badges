import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../img/mainLogo.svg';
import BadgesViews from '../views/BadgesViews';
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
            <BadgesViews
                loading={this.state.loading}
                data={this.state.data}
            />
        );
    }
}

export default Badges;