import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user)
  
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword (auth,email,password)
  }
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
    // console.log(user)
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const logout = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('first', currentUser)
      setLoading(false);
    })
    return () => {
      return unSubscribe();
   }
  },[])


  const authInfo = {
    user,
    loading,
    setUser,
    signInWithEmail,
    login,
    logout,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;