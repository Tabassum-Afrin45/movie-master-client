import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";

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
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const authInfo={
          createUser,
          signInUser,
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