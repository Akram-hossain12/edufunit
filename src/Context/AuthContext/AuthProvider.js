import React, { createContext, useState } from 'react';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../Firebse/firebse.init';



export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const EamilAndPasswordReg =(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailPass = (email,password)=>{
       
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {user,EamilAndPasswordReg,signInEmailPass}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;