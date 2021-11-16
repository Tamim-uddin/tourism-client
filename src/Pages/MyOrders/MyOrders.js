import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseAuth from '../Hooks/UseAuth';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyOrders = () => {
    const [Orders, setOrders] = useState([]);
    const {user} = UseAuth();

    useEffect( () => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    } , [])
    return (
        <div>
            <h3>this is from my orders {Orders.length}</h3>

            <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                           {Orders.Username}
                        </Typography>
                        <Typography variant="h5" component="div">
                             {Orders.tourName}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {Orders.price}
                        </Typography>
                        <Typography variant="body2">
                        well meaning and kindly.
                        
                        </Typography>
                    </CardContent>
                    
            </Card>
            
        </div>
    );
};

export default MyOrders;