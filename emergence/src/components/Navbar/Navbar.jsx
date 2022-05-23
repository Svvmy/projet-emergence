import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar({value}){
    if(value===true){
        return(
            <div>
            <nav className='navdeconnect'>
                <div className='navbar'></div>
            </nav>
            </div>
        )}else{
        
        return (
          <div>
            {/* <nav className='navdeconnect'>
                <div className='navbar'></div>
            </nav> */}
            <nav className='navConnect'>
                <Link to="/">Accueil  </Link>
                <Link to="/profil/:id">Profil</Link>
                {/*<Link to="/project">Projet</Link>*/}
                <Link to="/messagerie">Messagerie</Link>
            </nav>
          </div>    
        )
    }

}
export default Navbar
