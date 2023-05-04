// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const user = null;

const createUser = (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password)
}

    const AutInfo = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={AutInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;