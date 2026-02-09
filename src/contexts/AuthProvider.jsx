import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider()
const AuthProvider=({children})=>{
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithGoogle(auth, googleProvider)
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const authInfo={
          createUser,
          signInUser,
          signInWithGoogle,
          user,
          loading
    }
    return(
        <AuthContext value={authInfo}>
          {children}
        </AuthContext>
    )
}
export default AuthProvider;