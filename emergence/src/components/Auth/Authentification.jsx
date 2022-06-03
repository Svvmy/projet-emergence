import React, {useContext} from 'react'
import "./Authentification.css"
import google from './logoGoogle.png'
import apple from './apple.png'
import mail from './logoMail.png'
import AuthContext from './authProvider'
import ModuleSignIn from './SignIn/SignIn'
//import Nav from ''

//const UserContext = createContext()

export default function Authentification() {
  
  // const [connected, setConnect] = useState(false)
  const {toogleConnect} = useContext(AuthContext)
  

  const Connect = () =>{
      toogleConnect("connect")
  }
  // console.log(connected)
  
  return (
    

    <div className='divAuth'>
        <div className='div'>     
          <div className='divTitre'>
              <h1 className='text'>Bienvenue !</h1>
              <h2 className='text'>Faites émerger vos projets avec Emergence Design</h2>
          </div>          
          {/* <ModuleSignIn/> */}
          <div className='divBtnList'>
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
              <button className='connect' onClick={Connect}> Se connecter </button>
              {/*</Nav>*/}
          </div>
        
        </div>
      
      </div>
    



  )
}


