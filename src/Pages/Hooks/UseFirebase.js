import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

// call the initialize function
initializeAuthentication();

// google signin setup 
const Usefirebase = () => {
    const [user, setuser] = useState({});
    const [isloading, setisloading] = useState(true);


    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    const signinwithgoogle = () => {
        setisloading(true);
       return signInWithPopup(auth, Googleprovider)
        
        .finally(() => setisloading(false));
    }

    useEffect( () => {
       const unsubscribed = onAuthStateChanged(auth, user => {
            if (user){
                setuser(user);
            }
            else {
                setuser({})
            }
            setisloading(false);
        });
        return () => unsubscribed;
    } , [])

    const logout = () =>{
        setisloading(true)
        signOut(auth)
        .then( () => {

        })
        .finally(() => setisloading(false));
    }


    return{
        user,
        signinwithgoogle,
        logout,
        isloading
    }
}

export default Usefirebase;