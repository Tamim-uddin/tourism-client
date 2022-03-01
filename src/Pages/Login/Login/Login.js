import { Alert, Avatar, Box, Button, Card, CardContent, CircularProgress, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import bg from '../../../Images/background/bg6.jpg';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { FcGoogle } from "react-icons/fc";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
                <Grid sx={{mt: '40px'}}>
                    <Paper elevation={10} style={{padding: '20px', height: '70vh', width: 280, margin: 'auto', border: '1px solid #804d4d'}}>
                <Grid  align="center">
                <Avatar sx={{backgroundColor: '#804d4d'}}><LockOutlinedIcon /></Avatar>
                <h1 style={{fontFamily:'"Playfair Display",serif', marginTop: '20px', color:'#303030'}}>Please Login</h1>
                </Grid>
                    <form onSubmit={handleOnSubmit}>
                    <TextField 
                    fullWidth
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    fullWidth
                    label="Your Password" 
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <Button type='submit' variant='contained'  sx={{fontSize: 'medium', backgroundColor: '#804d4d', mt: '5px'}}>Login<LoginRoundedIcon/></Button><br />
                    </form> <br />
                    {/* google sign in */}
                    <Button onClick={handlegooglelogin} type="submit"  variant='contained'  sx={{fontSize: '15px', backgroundColor: '#804d4d'}}><FcGoogle sx={{fontSize: '35px', mr: '10px'}}/>Google Sign</Button><br /><br />
                    <NavLink to="/register" style={{color: '#804d4d'}}>New User?Please Register</NavLink><br /> 
                </Paper>
                {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Login</Alert>};
            {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}
            </Grid>   
    //    sx={{ boxShadow: 3, width: '35%', height: '420px',margin: 'auto', p: '30px', border: '1px solid 	#804d4d', borderRadius: '5px'}}
    // item xs={12} sm={6} md={12}
    // container spacing={2}
    );
};

export default Login;