import { Button, CircularProgress, Grid, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react';
import './Addreviews.css';
import { useForm } from "react-hook-form";
import UseAuth from '../Hooks/UseAuth';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Addreviews = () => {
    const {user, isloading} = UseAuth();
    const userPhoto = user?.photoURL;
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
   
    const onSubmit = data => {
        
        console.log(data);

        axios.post('https://limitless-chamber-81508.herokuapp.com/reviews', data)
        .then(res => {
            console.log(res)
        })
        
      const redierect_uri = location.state?.from || '/';
      history.push(redierect_uri);

    }

    return (
        <>
        <Header></Header>
        <Grid sx={{mt: '60px'}}>
             <Paper elevation={10} style={{padding: '20px', height: '60vh', width: 350, margin: 'auto', border: '1px solid #804d4d'}}>
             <Grid align="center">
            <h2 style={{fontFamily:'"Playfair Display",serif', marginBottom: '25px', marginTop: '30px'}}>Add Review</h2></Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input Value={userPhoto} disabled {...register("img")} placeholder="Img Url" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <input {...register("name")} value={user?.displayName} placeholder="Your Name" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <input {...register("email")} value={user?.email} placeholder="Your Email" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <textarea {...register("des")} required placeholder="What do you want to say" style={{width: '100%', marginBottom: '5px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <Button type='submit' variant='contained' sx={{backgroundColor: '#804d4d'}} >Add</Button>
            </form>
            </Paper>
        </Grid>
        </>
    );
};

export default Addreviews;