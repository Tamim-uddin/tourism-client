import { Button, CircularProgress, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import './Addtours.css';

const Addtours = () => {
    const {isloading} = UseAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://limitless-chamber-81508.herokuapp.com/tours', data)
        .then(res => {
            console.log(res);
        })

        const redierect_uri = location.state?.from || '/';
      history.push(redierect_uri);

    };

    
    return (
        <Grid sx={{mt: '40px'}}>
         <Paper elevation={10} style={{padding: '20px', height: '70vh', width: 300, margin: 'auto', border: '1px solid #804d4d', backgroundColor: ' #c69f9f'}}>
             <Grid align="center">
            <h1 style={{fontFamily:'"Playfair Display",serif', marginBottom: '25px'}}>Add Tour Event</h1></Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("img")} placeholder="Img Url" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
            <input {...register("loc", { required: true, maxLength: 20 })} placeholder="Location" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
            <input type="number" {...register("price")} placeholder="Price" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
            <input type="number" {...register("age")} placeholder="age" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
            <input type="number" {...register("daytime")} placeholder="Daytime" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
            <textarea {...register("des")} placeholder="Description" style={{width: '100%', marginBottom: '3px', border: '1px solid #909195', borderRadius: '5px'}}/> <br />
            <Button type='submit' variant='contained' sx={{backgroundColor: '#804d4d'}} >Add Tour </Button>
            </form>
        </Paper>
        </Grid>
    );
};

export default Addtours;