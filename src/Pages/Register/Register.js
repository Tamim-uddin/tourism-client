import { Alert, Button, TextField, Typography, CircularProgress } from '@mui/material';
import React from 'react';
import { useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const Register = () => {
    const [loginData, setloginData] = useState({});
    const {user, isloading, error, registerUser} = UseAuth();
    const history = useHistory();

    if(isloading){
        return <CircularProgress />
    }
    

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
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return 
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
    }


    return (
        <div>
            <Typography>
                Please Register
            </Typography>
            <form onSubmit={handleOnSubmit}>
            <TextField 
            label="Your Name" 
            name="name"
            onBlur={handleOnBlur}
            variant="standard" /> <br />
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
            <TextField 
            label="Retype Your Password" 
            name="password2"
            type="password"
            onBlur={handleOnBlur}
            variant="standard" /> <br />
            <Button type='submit' variant='contained'>Sign Up</Button><br />
            <NavLink to="/login">Already Register?Please LogIn</NavLink>
            </form>
            {user.email && <Alert severity="success">Successfully Register</Alert>};
            {error && <Alert severity="error">{error}</Alert>}
            
        </div>
    );
};

export default Register;