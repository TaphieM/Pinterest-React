import React from 'react';
import './Image.css';
import Modal from './Modal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faChevronDown } from '@fortawesome/free-solid-svg-icons';


//onClick={()=>props.modal(props.url)} va en el img para ver el modal
 class  Image extends React.Component{
   state={
      onOpen: false 
     }
     

 handleOpenModal= () =>{
  this.setState({onOpen:true}) 
}

 handleCloseModal= e =>{
   this.setState({onOpen:false})
 }

  render(){
    return( 
      <div className="card">
      {/* <div><button className="tag">{tags[0].title}<FontAwesomeIcon className="narrow" icon={faChevronDown} /></button><button className="save">Save</button></div> */}
      <div className="cardImage" >
      <img className="imgCard" src={this.props.img} alt={this.props.alt} onClick={this.handleOpenModal}/>
      <button className="more"><FontAwesomeIcon  icon={faEllipsisH} /></button>
      </div>
      <Modal 
      imgsm={this.props.imgsm}
      alt={this.props.alt}
      tags={this.props.tags}
      user={this.props.name}
      website={this.props.website}
      likes={this.props.likes}
      onClose={this.handleCloseModal}
      onOpen={this.state.onOpen}>
      </Modal>
      </div> 
    )
  }

}


export default Image;
