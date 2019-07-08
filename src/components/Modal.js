import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import {faTimes, faUpload, faAngleLeft, faEllipsisH, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

const Modal = (props) => {
    if(!props.onOpen){
        return null;
    }
    return (    
        <div className="modal">
        <button className="close-btn"onClick={props.onClose}><FontAwesomeIcon className="cross" icon={faTimes}/></button>
             <div className="header-modal">
                <div className="header-one"><button className="dots-btn"><FontAwesomeIcon className="dots" icon={faEllipsisH}/></button></div>
                <div className="header-two">
                <button className="btn-send"><FontAwesomeIcon className="upload" icon={faUpload}/><strong>Send</strong></button>
                <button className="btn-tag"><span>{props.tags}</span><FontAwesomeIcon className="narrow-up" icon={faChevronDown}/></button> 
                <button className="btn-save">Save</button>
                </div>  
            </div>

             <div className="containerImgyText">
                <figure className="img-container">
                    <img className="img-modal" src={props.imgsm} alt={props.alt}/>
                </figure>
                 <div className="text-container">
                    <button className="btn-follow">Follow</button>
                    <button className="link">{props.website}</button>
                    <hr className="line"/>
                    <p className="text">Photos and Comments</p>
                    <button className="btn-numberphotos">Photos</button>
                    <p className="comments">Comments</p> 
                </div>  
            </div>

        </div>
    )
}   


export default Modal;