import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Login.css';

// login with Google
const Login = () => {
    const [loginData, setloginData] = useState({});
    const {signinwithgoogle, error, user, signInWithEmail, isloading} = UseAuth();
    const location = useLocation();
    const history = useHistory();

    if(isloading){
        return <CircularProgress />
    }
    
    // sign in with Google
    const handlegooglelogin = () => {
        signinwithgoogle(location, history)
        
    }

    // sign in with email password
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = {...loginData};
        newloginData[field] = value;
        setloginData(newloginData);
        console.log(field, value, newloginData);

    }

    const handleOnSubmit = e => {
        e.preventDefault();
        signInWithEmail(loginData.email, loginData.password, location, history)
    }


    return (
        <div className="login">
            <h3>Please Login</h3>
            <form onSubmit={handleOnSubmit}>
            <TextField 
            label="Your Email" 
            name="email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard" /> <br />
            <TextField 
            label="Your Password" 
            name="password"
            type="password"
            onBlur={handleOnBlur}
            variant="standard" /> <br />
            <Button type='submit' variant='contained'>SignIn</Button><br />
            </form>
            
            <Button onClick={handlegooglelogin} type="submit" variant='contained'>Google Login</Button> <br />
            <NavLink to="/register">New User?Please Register</NavLink>
            {user.email && <Alert severity="success">Successfully Login</Alert>};
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );
};

export default Login;