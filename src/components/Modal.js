import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {
    if (!props.isOpen) {
        return null;
    }
    return (
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <div onClick={props.onCloseModal} className="Modal__close-button">X</div>
                    {props.children}
                </div>
            </div>,
            document.getElementById('modal')
        )
    );
}

export default Modal;