import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import './Login.css';

// login with Google
const Login = () => {
    const {signinwithgoogle} = UseAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home'; 
    // set the redirect
    const handlegooglelogin = () => {
        signinwithgoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className="login">
            <h3>Please Login</h3>
            <button onClick={handlegooglelogin} className="btn btn-warning">Google Login</button>
        </div>
    );
};

export default Login;