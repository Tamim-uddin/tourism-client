import { Button, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../Hooks/UseAuth';
import './Addtours.css';

const Addtours = () => {
    const {isloading} = UseAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://limitless-chamber-81508.herokuapp.com/tours', data)
        .then(res => {
            console.log(res);
        })
    };
    return (
        <Box>
        <div className="tour-added">
            <h1 style={{fontFamily:'"Playfair Display",serif', marginBottom: '25px'}}>Add Tour Event</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("img")} placeholder="Img Url"/> <br />
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
            <input {...register("loc", { required: true, maxLength: 20 })} placeholder="Location" /> <br />
            <input type="number" {...register("price")} placeholder="Price" /> <br />
            <input type="number" {...register("age")} placeholder="age" /> <br />
            <input type="number" {...register("daytime")} placeholder="Daytime" /> <br />
            <textarea {...register("des")} placeholder="Description"/> <br />< br />
            <Button type='submit' variant='contained' sx={{backgroundColor: '#804d4d'}} >Add Tour </Button>
            </form>
        </div>
        </Box>
    );
};

export default Addtours;