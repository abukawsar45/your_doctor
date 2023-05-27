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
    setLoading(true)
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
      if (currentUser && currentUser.email)
      {
        const validUser = {
          email: currentUser.email,
        };
          fetch('http://localhost:8080/jwt', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(validUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              // warning: LocalStorage is not best policy
              localStorage.setItem('doctor-access-token', data.token);
            });
            
      }
      else
      {
         localStorage.removeItem('doctor-access-token');
      }
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