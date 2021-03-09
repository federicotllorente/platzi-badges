import React from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeDeleteModal from '../components/BadgeDeleteModal';

function BadgesDetailsViews(props) {
    return (
        <div className="BadgeDetails">
            <div className="BadgeDetails__hero">
                <img src={confLogo} alt="Logo Platzi Conf" />
                <h1>{props.data.fname} {props.data.lname}</h1>
            </div>
            <div className="BadgeDetails__container">
                <Badge
                    fname={props.data.fname}
                    lname={props.data.lname}
                    email={props.data.email}
                    jtitle={props.data.jtitle}
                    twitter={props.data.twitter}
                />
                <div className="BadgeDetails__container__buttons">
                    <h2>Actions</h2>
                    <Link to={`${props.badgeId}/edit`}>Edit</Link>
                    <button onClick={props.handleOpenModal}>Delete</button>
                </div>
            </div>
            {props.error && (
                <div className="error_modal">
                    <h2>{props.error.message}</h2>
                    <p>Sorry, but there was an error.</p>
                    <p>Please try again in a moment 😊</p>
                </div>
            )}
            <BadgeDeleteModal
                isOpen={props.isOpen}
                onCloseModal={props.handleCloseModal}
                badge={props.data}
                deleteBadge={props.deleteBadge}
            />
        </div>
    );
}

export default BadgesDetailsViews;