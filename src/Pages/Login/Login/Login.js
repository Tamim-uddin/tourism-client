import { Alert, Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import bg from '../../../Images/background/bg6.jpg';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import GoogleIcon from '@mui/icons-material/Google';
import './Login.css';


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
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} >
                    <img src={bg} alt=''/>
                </Grid>  
                <Grid item xs={12} sm={6} md={6} sx={{mt: '150px', textAlign: 'center'}}>
                    <h2>Please Login</h2>
                    <form onSubmit={handleOnSubmit}>
                    <TextField 
                    sx={{width: '75%'}}
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '60%', mb: '5px'}}
                    label="Your Password" 
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <Button type='submit' variant='contained'  sx={{fontSize: 'medium'}}>Login<LoginRoundedIcon sx={{fontSize: 'medium', ml: '5px'}}/></Button><br />
                    </form> <br />
                    {/* google sign in */}
                    <Button onClick={handlegooglelogin} type="submit"  variant='contained'  sx={{fontSize: '15px'}}><GoogleIcon sx={{fontSize: '25px', color: "yellow", mr: '5px'}}/>Google Sign</Button> <br />
                    <NavLink to="/register">New User?Please Register</NavLink> <br /> 
                    {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Login</Alert>};
                    {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}
                </Grid>
            </Grid>
        </Box>
       
        
    );
};

export default Login;