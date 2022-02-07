import { Alert, Button, TextField, Typography, CircularProgress, Box, Grid } from '@mui/material';
import React from 'react';
import { useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import bg from '../../Images/background/bg6.jpg';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
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
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={6} >
                    <img src={bg} alt=''/>
                </Grid> 
                <Grid item xs={12} sm={8} md={6} sx={{mt: '150px', textAlign: 'center'}}>
                    <Typography variant="h3" gutterBottom component="div">
                        Please Register
                    </Typography>
                    <form onSubmit={handleOnSubmit}>
                    <TextField 
                    sx={{width: '75%'}}
                    label="Your Name" 
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '75%'}}
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '60%'}}
                    label="Your Password" 
                    name="password"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <TextField 
                    sx={{width: '45%', mb: '5px'}}
                    label="Retype Password" 
                    name="password2"
                    type="password"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                    <Button type='submit' variant='contained'  >Sign Up <ExitToAppRoundedIcon sx={{fontSize: 'medium', ml: '5px'}}/></Button><br />
                    <NavLink to="/login">Already Register?Please LogIn</NavLink>
                    </form> <br />
                    {user.email && <Alert severity="success" sx={{width: '75%'}}>Successfully Register</Alert>};
                    {error && <Alert severity="error" sx={{width: '75%'}}>{error}</Alert>}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;