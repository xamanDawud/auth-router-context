import React from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setUserName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const googleRegister = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  let authInfo = {
    user,
    createUser,
    setUserName,
    loginUser,
    googleRegister,
    logOut,
    loader,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
