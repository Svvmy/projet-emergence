import React from 'react'
import { Link } from 'react-router-dom';
import './form.css'


function Radio({ value, DomAct}){
   
    const verifChamps = () => {
        
        if(value==="oui"&& DomAct!==""){
            console.log("Concert pnl ZAK") 
            return (
                <Link className='aBtnSuivant' to="/FC/ajout-formation"><button id='btnSuivant' value={value}>Suivant</button></Link>
        )
    
        }else if(value==="non"&& DomAct!==""){   
            console.log("PAs de concert pour ZAK")
            return(
                <Link className='aBtnSuivant' to="/FC/ajout-experience"><button id='btnSuivant' value={value}>Suivant</button></Link>
        )
        }else{
            console.log("non frerot")
            console.log(DomAct)
            console.log(value)
            
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