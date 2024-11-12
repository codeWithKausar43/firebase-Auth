import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
 


export const AuthProvider = createContext(null)
export const googleProvider = new GoogleAuthProvider()

const MainLayout = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) =>{
        setLoading(true)
        setUser()
        return signInWithEmailAndPassword(auth,email,password)
         
    }

    const singInWithGoogle = () =>{
      return  signInWithPopup(auth,googleProvider)
    }

    const signOutUser = () =>{
        setLoading(true)
        signOut(auth)
        
        
    }

    useEffect(()=>{
    const unSucribe = onAuthStateChanged(auth, currenUser =>{
            setUser(currenUser)
            setLoading(false)
        })
         return () =>{
            unSucribe()
         }
    },[])



    const information = {
        createUser,
        userLogin,
        user,
        signOutUser,
        singInWithGoogle,
        loading
    }
    return (
      <AuthProvider.Provider value={information}>
        {children}
      </AuthProvider.Provider>
    );
};

export default MainLayout;