import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photoUrl})
    }



    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log("logged user inside the auth state odserver", loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        
        return ()=>{
            unsubscribe();
        }
    },[]);

    const AuthInfo = {
        user,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;