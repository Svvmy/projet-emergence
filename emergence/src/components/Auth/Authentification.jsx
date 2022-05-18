import React from 'react'
import "./Authentification.css"
import google from './logoGoogle.png'


export default function Authentification() {
  return (
    <div className='divAuth'>

        <div>
            <header>
                
            </header>
        </div>


        <div className='div'> 
          
          <div className='divTitre'>
              <h1 className='text'>Bienvenue !</h1>
              <h2 className='text'>Faites émerger vos projets avec Emergence Design</h2>
          </div>
          
          <div className='divBtnList'>
              <button><img src={google} alt="img"/> S'inscrire avec Google </button>
              <button> S'inscrire avec Apple </button>
              <button> S'inscrire avec un e-mail </button>
              <label className='text'> Vous avez déjà un compte ?</label>
              <button> Se connecter </button>
          </div>
        
        </div>
      
      </div>



  )
}
