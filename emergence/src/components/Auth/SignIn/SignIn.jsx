import {useContext} from 'react'
import UserContext from '../../../userContext'

export default function SignIn() {
  
  const {modalState, toggleModals} = useContext(UserContext)
  
  toggleModals("signIn")
  
  return (
    <>
    {modalState.signInModal && (
    <div className='moduleConnexion'>
      <div className='moduleConnexion-content'>
        <h1>Connexion</h1>
      </div>
    
    </div>
    )} 
    
    </>
      
        

  )
}
