import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseAuth from '../Hooks/UseAuth';

import MyOrder from '../MyOrder/MyOrder';
import { Grid } from '@mui/material';

const MyOrders = () => {
    const [Orders, setOrders] = useState([]);
    const {user} = UseAuth();

    useEffect( () => {
        fetch(`https://limitless-chamber-81508.herokuapp.com/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    } , [])
    return (
        <div>
            <h3>All My Orders {Orders.length}</h3>

            <Grid container spacing={2} >
                {
                Orders.map(order => <MyOrder key={order._id} order={order} Orders={Orders} setOrders={setOrders}></MyOrder>)
                }
            </Grid>

           
            
        </div>
    );
};

export default MyOrders;