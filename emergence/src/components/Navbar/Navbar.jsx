import {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logoEmergence from './logoEmergence.png'
import paraLogo from './icon/parametres.png'
import msgLogo from './icon/messagerie.png'
import notifLogo from './icon/notif.png'
import profilLogo from './icon/profil.png'
import AuthContext  from '../Auth/authProvider'



function Navbar(){

const {setAuth, toogleConnect, authentication} = useContext(AuthContext);


console.log(authentication)

function disconnect(){
    toogleConnect("disconnect")
    setAuth({})
    console.log("Deconnection")
    // console.log(authentication)
  }


// {/* <div className='linkNav'>  */}
    return (
        <>
        <nav className='navConnect'>
                {authentication.connected && (
                    <>
                    <Link className='link' to ="/"><img className="logoEmergence" src={logoEmergence} alt="img"/></Link>
                    {/* <Link className='link' to="/">Accueil</Link> */}
                    <div className='navbarRight'>
                        {/* <Link className='link' to="/project">Projet</Link> */}
                        <Link className='link' to="/project/:id"><button id='btnProjet'>Projet</button></Link>
                        <Link className='link' to="/parametres/:id"><img className="navIconRight" src={paraLogo} alt="parametres"/></Link>
                        <Link className='link' to="/messagerie/:id"><img className="navIconRight" src={msgLogo} alt="Messagerie"/></Link>
                        <Link className='link' to="/notification/:id"><img className="navIconRight" src={notifLogo} alt="Notification"/></Link>
                        <Link className='link' to="/profil/:id"><img className="navIconRight" src={profilLogo} alt="Profil"/></Link>

                    </div>
                    </>
                )}
                {!authentication.connected &&(
                    <>
                    <Link className='link' to ="/"><img className="logoEmergence" src={logoEmergence} alt="img"/></Link>
                    <button onClick={() => disconnect()} className='btnLogOut'>
                        Connexion
                    </button>
                    </>
                )}   
        </nav>
        </>
        )
    }


export default Navbar
