import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
import mainLogo from '../img/mainLogo.svg';
import BadgesViews from '../views/BadgesViews';

const Badges = ({ loading, data, error, fetchData }) => {
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);
    if (error) {
        return (
            <div className="NotFound">
                <img src={mainLogo} alt="Platzi Badges Logo" />
                <h1>Oops!</h1>
                <p>
                    {error.message} Please, try again later 😊
                </p>
                <Link to="/">Return to the Homepage</Link>
            </div>
        );
    }
    return (
        <BadgesViews
            loading={loading}
            data={data}
        />
    );
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        data: state.data,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Badges);