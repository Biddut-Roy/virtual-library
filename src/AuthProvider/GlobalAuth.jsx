import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.int";
import PropTypes from 'prop-types'; 



export const AuthContext = createContext()

const GlobalAuth =({children})=> {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const Provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, Provider);
    }
    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const info = { user , loader , createUser , signInGoogle , login , logOut}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

GlobalAuth.propTypes ={
    children: PropTypes.node,
}

export default GlobalAuth;