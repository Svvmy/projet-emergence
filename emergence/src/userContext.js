import { createContext, useState} from "react";


const UserContext = createContext()

export function UserContextProvider(props){


    //const signUp = (nom, prenom, datedenaissance, password, portable, email) => db.createUser(nom, prenom, datedenaissance, password, portable, email)
    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })

    const toggleModals = modal => {
        if(modal === 'signIn'){
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if(modal === 'signUp'){
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if(modal === 'close'){
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }
    return (
        <UserContext.Provider value={{modalState, toggleModals, /*signUp*/}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext