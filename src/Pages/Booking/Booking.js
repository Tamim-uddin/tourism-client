import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Booking.css';
import { Alert, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import UseAuth from '../Hooks/UseAuth';

const Booking = () => {
    const { _id } = useParams(); 
    const [tours, settours] = useState({});
    const {user} = UseAuth();
    const initialInfo = {Username: user.displayName, email: user.email}
    const [bookingInfo, setbookingInfo] = useState(initialInfo);
    

    useEffect( () => {
        fetch(`http://localhost:5000/tours/${_id}`)
        .then(res => res.json())
        .then(data => settours(data))
    } , []);



    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {bookingInfo};
        newInfo[field] = value;
        console.log(newInfo, value, field);
        setbookingInfo(newInfo);
    }

    const handleonSubmit = e => {
        e.preventDefault();
        const booking = {
            ...bookingInfo,
            tourName: tours.name,
            price: tours.price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json)
        .then(data => {
            if(data.insertedId){
                alert('Bookking successfull');
                
            }
            
        })
    }


    return (
        <div className="booking">
           
           <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                               <img style={{width: '90%'}} src={tours.img} alt="" />
                            </Typography>
                            <Typography variant="h5" component="div">
                                {tours.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                             ${tours.price}
                            </Typography>
                            <Typography variant="body2">
                                {tours.des}
                          
                            </Typography>
                        </CardContent>
                       
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
              
                    <form onSubmit={handleonSubmit}>
                        <TextField 
                        sx={{width: '75%', mb: 2}}
                        id="standard-basic" 
                        label="Name" 
                        name="Username"
                        onBlur={handleonBlur}
                        defaultValue={user.displayName}
                        variant="standard" /> <br />
                        <TextField 
                        sx={{width: '75%', mb: 2}}
                        id="standard-basic" 
                        label="Email" 
                        type="email"
                        name="email"
                        onBlur={handleonBlur}
                        defaultValue={user.email}
                        variant="standard" /> <br />
                        <TextField
                        sx={{width: '75%', mb: 2}} 
                        disabled                    
                        label="Tour Name"
                        defaultValue={tours.name}
                        variant="standard" /> <br />
                        <TextField
                        disabled
                        sx={{width: '75%', mb: 2}}                        
                        label="Price"
                        defaultValue={tours.price}
                        variant="standard" /> <br />
                        <Button type="submit" variant="contained">Place Order</Button>
                    </form>
                </Grid>
                
            </Grid> 
        </div>
    );
};

export default Booking;