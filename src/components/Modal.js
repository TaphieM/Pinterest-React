import React from 'react';
import './Modal.css';

const Modal = (props) => {
    if(!props.modalisOpen){
        return null;
    }
    return(
    <div className="Modal">
    <div className="Modal__container">
        <button className="Modal_close-button" onClick={props.onClose}>X</button>
        {props.children}
    </div>
    </div>
    )
}


export default Modal;