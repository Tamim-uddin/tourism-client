import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication();

const Usefirebase = () => {
    const [user, setuser] = useState({});


    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const signinwithgoogle = () => {
        signInWithPopup(auth, Googleprovider)
        .then(result => {
            setuser(result.user);
        })
    }

    useEffect( () => {
       const unsubscribed = onAuthStateChanged(auth, user => {
            if (user){
                setuser(user);
            }
            else {
                setuser({})
            }
        });
        return () => unsubscribed;
    } , [])

    const logout = () =>{
        signOut(auth)
        .then( () => {

        });
    }


    return{
        user,
        signinwithgoogle,
        logout
    }
}

export default Usefirebase;