import React from 'react';

import Modal from './Modal';

function BadgeDeleteModal(props) {
    return (
        <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
            <h1>Are you sure?</h1>
            <p>You're about to delete {props.badge.fname} {props.badge.lname} from the conference.</p>
            <div className="Modal__buttons">
                <div onClick={props.deleteBadge} className="Modal__confirm-button">Delete</div>
                <div onClick={props.onCloseModal} className="Modal__cancel-button">Cancel</div>
            </div>
        </Modal>
    );
}

export default BadgeDeleteModal;