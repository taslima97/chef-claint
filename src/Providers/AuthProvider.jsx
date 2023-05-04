// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
// eslint-disable-next-line no-unused-vars
const [user, setUser]= useState(null);
// eslint-disable-next-line no-unused-vars
const [loading, setLoading] = useState(true)

const createUser = (email, password) =>{
    setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)

};
// eslint-disable-next-line no-unused-vars
const singIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// eslint-disable-next-line no-unused-vars
const provider = new GoogleAuthProvider()

const goggleSignIn = () =>{
    return signInWithPopup(auth, provider)
}

// eslint-disable-next-line no-unused-vars
const gitProvider = new GithubAuthProvider();

const gitSignIn =() =>{
    return signInWithPopup(auth, gitProvider)
}

const userName = (name, photo) =>{
return updateProfile (auth.createUser, name, photo)
}


const logOut = () =>{
    
    return signOut(auth)
}

useEffect(()=>{
  
 // eslint-disable-next-line no-unused-vars
 const unsubscribe = onAuthStateChanged(auth, loggedUser =>{

     setLoading(false)
setUser(loggedUser)
  }) 
  return ()=>{
  return  unsubscribe()
  }
},[])

    const AutInfo = {
        user,
        loading,
        createUser,
       singIn,
       logOut,
       goggleSignIn,
       gitSignIn,
       userName
     
    }

    return (
        <AuthContext.Provider value={AutInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;