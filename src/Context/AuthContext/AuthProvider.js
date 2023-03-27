import React, { createContext, useEffect, useState } from 'react';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../../Firebse/firebse.init';



export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true)

    const EamilAndPasswordReg =(email,password)=>{
        setLoader(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailPass = (email,password)=>{
       setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const providerLogin=(provider)=>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }
    const providerGithub = (provider)=>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }
    const updeteUserProfile=(profile)=>{
             return updateProfile(auth.currentUser,profile)
    }
    const userVrifying =()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const logOut =()=>{
       setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            
            if(currentUser===null||currentUser.emailVerified){
                setUser(currentUser);
            }
          setLoader(false)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        user,
        loader,
        setLoader,
        userVrifying,
        EamilAndPasswordReg,
        signInEmailPass,
        providerLogin,
        providerGithub,
        logOut,
        updeteUserProfile,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;