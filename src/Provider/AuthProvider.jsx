import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)
    const auth = getAuth(app);
    const [loader, setLoader]=useState(true)
    const provider = new GoogleAuthProvider()

    const createNewUser=(email ,password)=>{
       return createUserWithEmailAndPassword(auth,email, password)
    }


    const loginUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[]);

    const userProfileUpdate=(updateData)=>{
       return updateProfile(auth.currentUser, updateData)

    }
    const loginWithGoogle=()=>{
      return  signInWithPopup(auth,provider)

    }

    const logOutUser=()=>{
        signOut(auth)
    }
    const authInfo={
       setUser,
       user,
       createNewUser,
       loginUser,
       logOutUser,
       loader,
       userProfileUpdate,
       loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;