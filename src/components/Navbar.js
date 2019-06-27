import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import {faBell, faCommentDots, faEllipsisH, faUserCircle, faSearch} from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component{
 render(){
     return(
         <header className="navbar">
            <div><FontAwesomeIcon className="pinterest" icon={faPinterest} /></div>
            <div className="bar">
             <FontAwesomeIcon className="loop" icon={faSearch} />
             <input className="search" type="text" placeholder="Search"/>
             <div className="custom-select">
                <select>
              <option>All pines</option>
                </select>
             </div>
             <FontAwesomeIcon className="icons" icon={faUserCircle} />
             <span>Stephanie</span>
             <FontAwesomeIcon className="icons" icon={faCommentDots} />
             <FontAwesomeIcon className="icons" icon={faBell} />
             <FontAwesomeIcon className="icons" icon={faEllipsisH} /> 
             </div>  
         </header>
     )
 }
}

export default Navbar;