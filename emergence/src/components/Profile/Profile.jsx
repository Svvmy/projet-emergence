import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export default function Profile (){
    return(
        <div>
            <h1>Votre profil</h1>
            <nav>
               <Link to="/profil/:id/post">Posts</Link>
               <Link to="/profil/:id/experience">Expériences</Link>
               <Link to="/profil/:id/projet">projets</Link>
               <Link to="/profil/:id/messagerie">Messagerie</Link>
           </nav>
           <Outlet />   
        </div>
    )
}
//Outlet permet de repeter le contenu de la page profil