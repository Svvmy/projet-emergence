import React from 'react';
//import '.src/App.css'
import frog from './utils/frogBlblbl.gif'
import {Link, Outlet} from 'react-router-dom';

export default function Home (){
    return(
    <div className="App">
      <header className="App-header">
        <img src={frog} className="App-logo" alt="logo" />
        <p>
          Rinzler ouai la streeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet
          en plus j'aime bien le miel
        </p>
        <p>Connecté</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
            <Link to="/profil/:id">Profile</Link>
          {/*ceci est test me permettant de savoir si je peux push.*/}
        </nav>
        <Outlet />
      </header>
    </div>
    )
}