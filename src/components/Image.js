import React from 'react';


function Image(props) {

    return (
            <img onClick={()=>props.modal(props.url)} id="imgCard" src={props.url} alt="imgApi"></img>
    )


}

export default Image;