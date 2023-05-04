// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
// eslint-disable-next-line no-unused-vars
const [user, setUser]= useState(null)

const createUser = (email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password)

};
// eslint-disable-next-line no-unused-vars
const singIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () =>{
    return signOut(auth)
}

useEffect(()=>{
  
 // eslint-disable-next-line no-unused-vars
 const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
console.log('auth steate change', loggedUser)
setUser(loggedUser)
  }) 
  return unsubscribe()
},[])

    const AutInfo = {
        user,
        createUser,
       singIn,
       logOut
     
    }

    return (
        <AuthContext.Provider value={AutInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;