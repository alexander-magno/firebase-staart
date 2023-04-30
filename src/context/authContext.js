import { createContext, useContext, useEffect, useState } from "react";
import React  from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail, sendPasswordResetEmail } from "firebase/auth";
import {auth} from '../firebase'

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()


    function logOut(){
        return signOut(auth)
    }

    function singIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function singUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function updateEmailAddress(newEmail){
        return updateEmail(currentUser, newEmail)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            setCurrentUser(user)
        });
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider 
        value={{
            singUp: singUp,
            singIn: singIn,
            logOut: logOut,
            currentUser: currentUser,
            updateEmailAddress: updateEmailAddress,
            resetPassword:resetPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}