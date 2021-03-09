import React from 'react';

import confLogo from '../img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

function BadgeNewViews(props) {
    return (
        <div className="BadgeNew">
            <div className="BadgeNew__hero">
                <img src={confLogo} alt="Logo Platzi Conf" />
            </div>
            <div className="BadgeNew__container">
                <Badge
                    fname={props.form.fname}
                    lname={props.form.lname}
                    email={props.form.email}
                    jtitle={props.form.jtitle}
                    twitter={props.form.twitter}
                />
                <BadgeForm onSubmit={props.handleSubmit} onChange={props.handleChange} formValues={props.form} action="create" />
            </div>
            {props.error && (
                <div className="error_modal">
                    <h2>{props.error.message}</h2>
                    <p>Sorry, but there was an error.</p>
                    <p>Please try again in a moment 😊</p>
                </div>
            )}
        </div>
    );
}

export default BadgeNewViews;