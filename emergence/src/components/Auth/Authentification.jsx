import React, {useContext, useState} from 'react'
import "./Authentification.css"
import google from './logoGoogle.png'
import apple from './apple.png'
import mail from './logoMail.png'
//import Nav from ''


export default function Authentification() {
  
  const [connect, setConnect] = useState(false)
  
 


  const toggleConnect = () =>{
      setConnect(!connect)
  }
  console.log(connect)
  
  return (
    <div className='divAuth'>
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
                    <img className="imgClass" src={google} alt="img"/>
                  S'inscrire avec Google 
              </button>
              
              <button>
                <img className="imgClass" src={apple} alt="img"/> 
                S'inscrire avec Apple 
              </button>
              
              <button>
                <img className="imgClass" src={mail} alt="img"/> 
                S'inscrire avec un e-mail 
              </button>
              
              <label className='text'id='label'> Vous avez déjà un compte ?</label>
              {/*<Nav>*/}
              <button className='connect' onClick={toggleConnect}> Se connecter </button>
              {/*</Nav>*/}
          </div>
        
        </div>
      
      </div>



  )
}
