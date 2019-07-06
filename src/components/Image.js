import React from 'react';
import './Image.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faChevronDown } from '@fortawesome/free-solid-svg-icons';


//onClick={()=>props.modal(props.url)} va en el img para ver el modal
 const Image = ({item}) => {

//extraer la imagen y el titulo de la imagen usando destructuring
  const {alt_description, urls, tags} = item;
    return (
        <div className="card">
        {/* <div><button className="tag">{tags[0].title}<FontAwesomeIcon className="narrow" icon={faChevronDown} /></button><button className="save">Save</button></div> */}
        <div className="cardImage">
        <img className="imgCard" src={urls.thumb} alt={alt_description}></img>
        <button className="more"><FontAwesomeIcon  icon={faEllipsisH} /></button>
        </div> 
        </div>  
    );  
}

export default Image;

