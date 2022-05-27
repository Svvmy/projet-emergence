import React from 'react'
import { Link } from 'react-router-dom';
import './form.css'


function Radio({ value }){
  if(value==="oui"){
    return (
        <Link className='aBtnSuivant' to="/FC/ajout-formation"><button id='btnSuivant' value={value}>Suivant</button></Link>
    )
    }else{
        
    return(
        <Link className='aBtnSuivant' to="/FC/ajout-experience"><button id='btnSuivant' value={value}>Suivant</button></Link>
    )}

}
export default Radio