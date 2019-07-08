import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import {faBell, faCommentDots, faEllipsisH, faUserCircle, faSearch} from '@fortawesome/free-solid-svg-icons';



class Navbar extends React.Component{
    state={
        query:"",
    }
  
    searchQuery=e=>{
        if(e.key==="Enter"){
            this.setState({  //el segundo parámetro es un callback para que llame a tiempo a la busqueda
                query:e.target.value
              },()=>{
              this.props.searchQuery(this.state.query);
              });
        }  
      } 
       
 render(){
     return(
         <header className="navbar">
            <button id="btn-save"><FontAwesomeIcon className="pinterest" icon={faPinterest} /></button>
            <div className="bar">
             <FontAwesomeIcon className="loop" icon={faSearch} />
             <input className="search" type="text" placeholder="Search" onKeyPress={this.searchQuery} />
                <select className="custom-select">
              <option>All Pins</option>
                </select>
            </div>
            <div>
             <button><strong>Home</strong></button>
             <button><strong>Following</strong></button>
             <button><FontAwesomeIcon className="icons" icon={faUserCircle} /> <strong>Stephanie</strong></button>
             <button><FontAwesomeIcon className="icons" icon={faCommentDots} /></button>
             <button><FontAwesomeIcon className="icons" icon={faBell} /></button>
             <button><FontAwesomeIcon className="icons" icon={faEllipsisH} /></button>  
             </div>
         </header>
        
        
     )
 }
}

export default Navbar;