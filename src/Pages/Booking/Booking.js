import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Booking.css';
import { TextField } from '@mui/material';
import UseAuth from '../Hooks/UseAuth';

const Booking = () => {
    const { _id } = useParams(); 
    const [bookings, setbookings] = useState({});
    const {user} = UseAuth();

    useEffect( () => {
        fetch(`http://localhost:5000/tours/${_id}`)
        .then(res => res.json())
        .then(data => setbookings(data))
    } , [])


    return (
        <div className="booking">
           <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {bookings.img}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {bookings.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                             ${bookings.price}
                            </Typography>
                            <Typography variant="body2">
                                {bookings.des}
                          
                            </Typography>
                        </CardContent>
                       
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <form>
                        <TextField 
                        sx={{width: '75%', mb: 2}}
                        id="standard-basic" 
                        label="Name" 
                        defaultValue={user.displayName}
                        variant="standard" /> <br />
                        <TextField 
                        sx={{width: '75%', mb: 2}}
                        id="standard-basic" 
                        label="Email" 
                        type="email"
                        defaultValue={user.email}
                        variant="standard" /> <br />
                       
                        
                        <TextField 
                        sx={{width: '75%', mb: 2}}
                        id="standard-basic" 
                        label="Service Name" 
                        defaultValue={bookings.name}
                        variant="standard" /> <br />
                        <TextField 
                        sx={{width: '75%', mb: 2}}
                        id="standard-basic" 
                        label="Phone" 
                        defaultValue=''
                        variant="standard" /> <br />
                        <TextField 
                        sx={{width: '75%', mb: 2}}
                        id="standard-basic" 
                        label="Address" 
                        defaultValue=''
                        variant="standard" /> <br />
                    </form>
                </Grid>
                
            </Grid> 
        </div>
    );
};

export default Booking;