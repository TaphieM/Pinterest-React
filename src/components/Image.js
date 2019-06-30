import React from 'react';


//onClick={()=>props.modal(props.url)} va en el img para ver el modal
 const Image = ({item}) => {

//extraer la imagen y el titulo de la imagen usando destructuring
  const {description, alt_description, urls} = item;
    return (
     
     <figure className="cardImage">
     <img id="imgCard" src={urls.thumb} alt={alt_description}></img>
     <p>{description}</p>
     </figure>  
   
    );  
}

export default Image;

