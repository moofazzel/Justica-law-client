import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    };

    const UpdateNamePhotoURL = (profile) => {
        return updateProfile(auth.currentUser,profile)
      }
    
    const logOut = () => {
       return signOut(auth);
    }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    handleRegister,
    loginWithEmailPassword,
      googleSignIn,
      UpdateNamePhotoURL,
      logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
