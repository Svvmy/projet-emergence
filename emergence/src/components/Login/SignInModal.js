import React, {useContext, useRef, useState} from 'react'
import { UserContext } from '../context/userContext'
import AuthContext from '../context/authProvider'
import axios from '../api/axios';
const LOGIN_URL = '/login';

export default function SignInModal() {
    const errRef = useRef();
    const {auth, setAuth} = useContext(AuthContext);
    const {modalState, toggleModals} = useContext(UserContext)
    const {toogleConnect} = useContext(AuthContext)
    //console.log(modalState, toggleModals)
    const [mail, setMail]=useState('')
    const [pwd, setPwd]=useState('')
    const [success, setSuccess]=useState(false)
    const [errMsg, setErrMsg]=useState('')
    const [classname, setClassname]=useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,{
                email:mail,
                password:pwd
            })
            console.log(response?.data)
            //console.log(response)
            const accessToken = response?.data?.accessToken;
            const refreshToken = response?.data?.refreshToken;
            console.log(refreshToken)
            setAuth({mail, pwd, accessToken, refreshToken});
            setMail('')
            setPwd('')
            setSuccess(true)
            toogleConnect("connect")
            setClassname('alert alert-success mt-1')
        } catch (error) {
            if(!error?.response){
                setErrMsg('Aucune reponse du serveur')
             } else if (error.response?.status === 401){
                setErrMsg(error.response.data.message)
                console.log(error)
             } else {
                setErrMsg("Une erreur est survenue")
             }
             errRef.current.focus()
            setClassname('alert alert-danger mt-1')
            console.log(error)
            }
        }
  return (
    <>
        {modalState.signInModal && (
        <div className=' position-fixed top-0 vw-100 vh-100'>
            <div onClick={() => toggleModals("close")} className='w-100 h-100 bg-dark bg-opacity-75'></div>
            <div className='position-absolute top-50 start-50 translate-middle' style={{minWidth: "400px"}}>
                <div className='modal-dialog shadow'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Connexion</h5>
                            <button onClick={() => toggleModals("close")} className='btn-close'></button>
                        </div>
                        <div className='modal-body'>
                            <p ref={errRef} className={classname}>{success ? `Bienvenue ${auth.mail}\n${auth.pwd}\n${auth.accessToken}\n${auth.refreshToken}`:errMsg}</p>
                             <form 
                                onSubmit={handleSubmit} 
                                className='sign-in-form'>
                             <div className='form-floating mb-3'>
                                   
                                    <input 
                                    onChange={(e)=>setMail(e.target.value)}
                                    value={mail}
                                    name='email'
                                    required
                                    type="email"
                                    className='form-control'
                                    id="signIpEmail"
                                    placeholder="Mot de passe"
                                    /> 
                                    <label htmlFor='signUpEmail' className='form-label'>Adresse mail</label>
                                </div>
                                <div className='form-floating mb-3'>
                                   
                                    <input 
                                    onChange={(e)=>setPwd(e.target.value)}
                                    value={pwd}
                                    name='pwd'
                                    required
                                    type="password"
                                    className='form-control'
                                    id="signInPwd"
                                    placeholder="Mot de passe"
                                    />
                                    <label htmlFor='signInPwd' className='form-label'>Mot de passe</label>
                                </div>
                                <button className='btn btn-black'>Connexion</button>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
  )
}
