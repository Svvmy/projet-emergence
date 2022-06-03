import React, { useContext, useRef, useState, /*useEffect*/ } from 'react'
import { UserContext } from '../context/userContext'
import { date } from '../functions/fonction'
import { post } from 'axios'
const HOST = "localhost"
const PORT = "5000"


export default function SignUpModal() {

    const { modalState, toggleModals, /*signUp*/ } = useContext(UserContext)


    const [validation, setValidation] = useState("");

    const inputs = useRef([])

    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }

    async function p(nom, prenom, ddn, pass, port, mail) {
        let re = { status: 2, message: "Une erreur est survenue" }
        try {
            const response = await post(`http://${HOST}:${PORT}/api/register`, {
                nom: nom,
                prenom: prenom,
                date_de_naisssance: ddn,
                password: pass,
                portable: port,
                email: mail
            })
            re = { status: 0, message: `${response?.data?.message}` }
        }
        catch (error) {
            //console.log(erreur.response.data.message)
            re = { status: 1, message: `${error.response?.data?.message}` }
        }
        return re.message
    }

    const handleForm = async e => {
        e.preventDefault()

        if ((inputs.current[5].value.length || inputs.current[6].value.length) < 8) {
            setValidation("8 caratères minimum")
            return;
        }
        else if (inputs.current[5].value !== inputs.current[6].value) {
            setValidation('Les mots de passe ne sont pas identique')
            return;
        }
        else if (inputs.current[2].value !== inputs.current[3].value) {
            setValidation('Les mails ne sont pas identique')
            return;
        }
        else {
            //alert(inputs.current[0].value+"\n"+inputs.current[1].value+"\n"+inputs.current[2].value+"\n"+inputs.current[3].value+"\n"+inputs.current[4].value+"\n"+inputs.current[5].value+"\n"+inputs.current[6].value+"\n"+inputs.current[7].value)
            const post = await p(inputs.current[0].value, inputs.current[1].value, inputs.current[7].value, inputs.current[5].value, inputs.current[4].value, inputs.current[2].value)
            setValidation(post)

        }
    }

    return (
        <>
            {modalState.signUpModal && (
                <div className='position-fixed top-0 vw-100 vh-100'>
                    <div onClick={() => toggleModals("close")} className='w-100 h-100 bg-dark bg-opacity-75'></div>
                    <div className='position-absolute top-50 start-50 translate-middle' style={{ minWidth: "400px" }}>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title'>Inscription</h5>
                                    <button onClick={() => toggleModals("close")} className='btn-close'></button>
                                </div>
                                <div className='modal-body'>
                                    <form
                                        onSubmit={handleForm}
                                        className='sign-up-form'>
                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                name='nom'
                                                required
                                                type="text"
                                                className='form-control'
                                                id="signUpNom"
                                                placeholder="Nom"
                                            />
                                            <label htmlFor='signUpNom' className='form-label'>Nom</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                name='prenom'
                                                required
                                                type="text"
                                                className='form-control'
                                                id="signUpPrenom"
                                                placeholder="Prenom"
                                            />
                                            <label htmlFor='signUpPrenom' className='form-label'>Prenom</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                name='email'
                                                required
                                                type="email"
                                                className='form-control'
                                                id="signUpEmail"
                                                placeholder="Adresse mail"
                                            />
                                            <label htmlFor='signUpEmail' className='form-label'>Adresse mail</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                name='email'
                                                required
                                                type="email"
                                                className='form-control'
                                                id="repeatEmail"
                                                placeholder="Répeter le mail"
                                            />
                                            <label htmlFor='repeatEmail' className='form-label'>Répeter le mail</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                name='tel'
                                                required
                                                type="tel"
                                                className='form-control'
                                                id="signUpTel"
                                                placeholder="Telephone"
                                            />
                                            <label htmlFor='signUpTel' className='form-label'>Telephone</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                name='pwd'
                                                required
                                                type="password"
                                                className='form-control'
                                                id="signUpPwd"
                                                placeholder="Mot de passe"
                                            />
                                            <label htmlFor='signUpPwd' className='form-label'>Mot de passe</label>
                                        </div>

                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                name='pwd'
                                                required
                                                type="password"
                                                className='form-control'
                                                id="repeatPwd"
                                                placeholder="Répéter le mot de passe"
                                            />
                                            <label htmlFor='repeatPwd' className='form-label'>Répéter le mot de passe</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input
                                                ref={addInputs}
                                                type="date"
                                                name="ddn"
                                                min="1950-01-01"
                                                max={date(8)}
                                                className='form-control'
                                                id="signUpDDN"
                                                placeholder="Date de naissance"
                                            />
                                            <label htmlFor="signUpDDN" className='form-label'>Date de naissance</label>
                                            <p className='text-danger mt-1'>
                                                {validation}</p>
                                        </div>


                                        <button className='btn btn-black'>S'inscrire</button>
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
