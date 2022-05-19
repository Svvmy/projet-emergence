import React from 'react'
import "./Authentification.css"
import google from './logoGoogle.png'
import apple from './apple.png'
import mail from './logoMail.png'


export default function Authentification() {
  return (
    <div className='divAuth'>
        <div className="flex">
          <img className="imgClass" src={google} alt="img"/>
          <img className="imgClass" src={google} alt="img"/>
          <img className="imgClass" src={google} alt="img"/>
        </div>

        <div className='div'> 
          
          <div className='divTitre'>
              <h1 className='text'>Bienvenue !</h1>
              <h2 className='text'>Faites émerger vos projets avec Emergence Design</h2>
          </div>
              
          
          <div className='divBtnList'>
              {/*<button> 
                <div className='divbtn'>
                <div className='imgdiv'>
                <img className='googleTest' src={google} alt="google" />  
                </div>
                <div className='text1div'>
                S'inscrire avec Google
                </div>
                </div>
              </button>*/}
              <button>
                  <img className="imgClass" src={google} alt="img"/>S'inscrire avec Google 
              </button>
              
              <button>
                <img className="imgClass" src={apple} alt="img"/> S'inscrire avec Apple 
              </button>
              
              <button>
                <img className="imgClass" src={mail} alt="img"/> S'inscrire avec un e-mail 
              </button>
              
              
              
              <label className='text'> Vous avez déjà un compte ?</label>
              <button className='connect'> Se connecter </button>
          </div>
        
        </div>
      
      </div>



  )
}
