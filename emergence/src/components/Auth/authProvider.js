import { createContext, useState} from "react";

const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({});
    const [authentication, setAuthentication] = useState({
        connected: false
    })

    const toogleConnect = connect => {
        if (connect === "connect"){
            setAuthentication({
                connected: true
            })
        }
        if (connect ==="disconnect"){
            setAuthentication({
                connected: false
            })
        }
    }
    return (
        <AuthContext.Provider value={{auth, setAuth, toogleConnect, authentication}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;