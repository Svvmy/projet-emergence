import React from 'react'
import { Link } from 'react-router-dom';
import './form.css'


function Radio({ value, DomAct}){
   
    const verifChamps = () => {
        
        if(value==="oui"&& DomAct!==""){
            console.log("Étudiant") 
            return (
                <Link className='aBtnSuivant' to="/FC/ajout-formation"><button id='btnSuivant' value={value}>Suivant</button></Link>
        )
    
        }else if(value==="non"&& DomAct!==""){   
            console.log("Pas étudiant")
            return(
                <Link className='aBtnSuivant' to="/FC/ajout-experience"><button id='btnSuivant' value={value}>Suivant</button></Link>
        )
        }else{
            return(
                <button id='btnSuivant' value={value} onClick={verifChamps} >Suivant</button>
                )
            }
        }

return(
    verifChamps()    
)


}
export default Radio