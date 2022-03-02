import { Button, Grid, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react';
import './Addreviews.css';
import { useForm } from "react-hook-form";
import UseAuth from '../Hooks/UseAuth';

const Addreviews = () => {
    const {user} = UseAuth();
    console.log(user.displayName);
    const userPhoto = user?.photoURL;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/reviews', data)
        .then(res => {
            console.log(res)
        })
        


    }

    return (
        <Grid sx={{mt: '60px'}}>
             <Paper elevation={10} style={{padding: '20px', height: '60vh', width: 300, margin: 'auto', border: '1px solid #804d4d', backgroundColor: ' #c69f9f'}}>
             <Grid align="center">
            <h2 style={{fontFamily:'"Playfair Display",serif', marginBottom: '25px', marginTop: '30px'}}>Add Review</h2></Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input Value={userPhoto} disabled {...register("img")} placeholder="Img Url" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <input {...register("name")} value={user?.displayName} placeholder="Your Name" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <input {...register("email")} value={user?.email} placeholder="Your Email" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <textarea {...register("des")} placeholder="What do you want to say" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
                <Button type='submit' variant='contained' sx={{backgroundColor: '#804d4d'}} >Add</Button>
            </form>
            </Paper>
        </Grid>
    );
};

export default Addreviews;