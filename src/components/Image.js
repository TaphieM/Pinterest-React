import React from 'react';
import './Image.css';
import Modal from './Modal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faChevronDown } from '@fortawesome/free-solid-svg-icons';


//onClick={()=>props.modal(props.url)} va en el img para ver el modal
 class  Image extends React.Component{
   state={
      modalisOpen: false 
     }
     

 handleOpenModal= () =>{
  this.setState({modalisOpen:true}) 
}

 handleCloseModal= e =>{
   this.setState({modalisOpen:false})
 }

  render(){
    return( 
      <div className="card">
      {/* <div><button className="tag">{tags[0].title}<FontAwesomeIcon className="narrow" icon={faChevronDown} /></button><button className="save">Save</button></div> */}
      <div className="cardImage" >
      <img className="imgCard"src={this.props.img} alt={this.props.alt} onClick={this.handleOpenModal}/>
      <button className="more"><FontAwesomeIcon  icon={faEllipsisH} /></button>
      </div>
      <Modal 
      onClose={this.handleCloseModal}
      modalisOpen={this.state.modalisOpen}>
      <img src={this.props.img}/>
      </Modal>
      </div> 
    )
  }

}


// const Modal = (props) => {
//   if(!props.modalisOpen){
//       return null;
//   }
//   return(
//   <div className="Modal">
//   <div className="Modal__container">
//   {props.children}
//       <button className="Modal_close-button" onClick={props.handleCloseModal}>X</button>
      
//   </div>
//   </div>
//   )
// }

export default Image;
