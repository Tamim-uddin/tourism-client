import { Alert, Box, Button, Card, CardContent, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import bg from '../../../Images/background/bg6.jpg';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { FcGoogle } from "react-icons/fc";
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
                <Grid container spacing={2} sx={{ boxShadow: 3, width: '25%', height: '420px', mt: '130px', ml: '500px', p: '30px', border: '1px solid 	#804d4d', borderRadius: '5px'}}>
                {/* <Grid item xs={12} sm={6} md={6} >
                    <img src={bg} alt=''/>
                </Grid>   */}
                
                <Grid item xs={12} sm={6} md={12} sx={{textAlign: 'center', mt: '20px'}}>
                <h1 style={{fontFamily:'"Playfair Display",serif'}}>Please Login</h1>
                    <form onSubmit={handleOnSubmit}>
                    <TextField 
                    sx={{width: '100%'}}
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '100%', mb: '5px'}}
                    label="Your Password" 
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <Button type='submit' variant='contained'  sx={{fontSize: 'medium', backgroundColor: '#804d4d'}}>Login<LoginRoundedIcon/></Button><br />
                    </form> <br />
                    {/* google sign in */}
                    <Button onClick={handlegooglelogin} type="submit"  variant='contained'  sx={{fontSize: '15px', backgroundColor: '#804d4d'}}><FcGoogle sx={{fontSize: '35px', mr: '10px'}}/>Google Sign</Button><br />
                    <NavLink to="/register" style={{color: '#804d4d'}}>New User?Please Register</NavLink> <br /> 
                </Grid>
            </Grid>
            {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Login</Alert>};
            {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}
        </Box>
       
        
    );
};

export default Login;