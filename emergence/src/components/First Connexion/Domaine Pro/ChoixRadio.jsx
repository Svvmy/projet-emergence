import React from 'react'
import { Link } from 'react-router-dom';
import './form.css'


function Radio({ value }){
  if(value==="oui"){
    return (
        <Link to="/FC/ajout-formation"><button value={value}>Suivant</button></Link>
    )
    }else{
        return(
            <Link to="/FC/ajout-experience"><button value={value}>Suivant</button></Link>
    )}

}
export default Radio