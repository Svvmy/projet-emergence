import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return (
        <nav>
            <Link to="/">Accueil  </Link>
            <Link to="/profil/:id">Profil</Link>
            {/*<Link to="/project">Projet</Link>*/}
            <Link to="/messagerie">Messagerie</Link>
        </nav>
    )
}