import {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logoEmergence from './logoEmergence.png'
import AuthContext  from '../Auth/authProvider'



function Navbar(){

const {setAuth, toogleConnect, authentication} = useContext(AuthContext);

function disconnect(){
    toogleConnect("disconnect")
    setAuth({})
    console.log("Deconnection")
    console.log(authentication)
  }


// {/* <div className='linkNav'>  */}
    return (
        <>
        <nav className='navConnect'>
                {!authentication.connected && (
                    <>
                    <img className="logoEmergence" src={logoEmergence} alt="img"/>
                    <Link className='link' to="/">Accueil</Link>
                    <Link className='link' to="/profil/:id">Profil</Link>
                    {/*<Link to="/project">Projet</Link>*/}
                    <Link className='link' to="/messagerie">Messagerie</Link>
                    </>
                )}
                {authentication.connected &&(
                    <>
                    <button onClick={() => disconnect()} className='btn btn-danger ms-2'>
                        Log Out
                    </button>
                    </>
                )}   
        </nav>
        </>
        )
    }


export default Navbar
