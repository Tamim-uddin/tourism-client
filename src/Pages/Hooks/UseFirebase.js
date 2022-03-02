import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

// call the initialize function
initializeAuthentication();

// google signin setup 
const Usefirebase = () => {
    const [user, setuser] = useState({});
    const [isloading, setisloading] = useState(true);
    const [error, seterror] = useState('');
    const [admin, setadmin] = useState(false);

    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google
    const signinwithgoogle = (location, history) => {
        setisloading(true);
        signInWithPopup(auth, Googleprovider)
        .then((result) => {
          const user = result.user;
          const redierect_uri = location.state?.from || '/';
          history.push(redierect_uri);
          seterror('');
          saveUser(user.email, user.displayName, 'PUT');
        })
        .catch((error) => {
            seterror(error.message)
        })
        .finally(() => setisloading(false));
    }

    // sign up with email & pass
    const registerUser = (email, password, name, history) => {
        setisloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = {email, displayName: name};
                setuser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {

                  }).catch((error) => {

                  });
                  
                const user = userCredential.user;
                

                history.push('/');
                seterror('')
            })
            .catch((error) => {
                seterror(error.message)
            })
            .finally(() => setisloading(false))
    }
  
    // sign in with email
    const signInWithEmail = (email, password, location, history) => {
        setisloading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            const redierect_uri = location.state?.from || '/';
            history.push(redierect_uri);
            seterror('');
        })
        .catch((error) => {
           seterror(error.message);
        })
        .finally(() => setisloading(false))
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

    // save user
   const saveUser = (email, displayName, method) => {
       const user = { email, displayName };
       fetch('https://limitless-chamber-81508.herokuapp.com/users', {
           method: method,
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(user)
       })
       .then()
   }

//    secure admin
   useEffect( () => {
       fetch(`https://limitless-chamber-81508.herokuapp.com/users/${user.email}`)
       .then(res => res.json())
       .then(data => setadmin(data.admin))
   } , [user.email])


    return{
        user,
        admin,
        signinwithgoogle,
        registerUser,
        signInWithEmail,
        logout,
        isloading,
        error
    }
}

export default Usefirebase;