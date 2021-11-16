import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
   const [manageorders, setmanageorders] = useState([]);

    useEffect( () => {
        fetch('https://limitless-chamber-81508.herokuapp.com/bookings/admin')
        .then(res => res.json())
        .then(data => setmanageorders(data))
    } , [])

    return (
        <div>
            <h3>All Orders {manageorders.length}</h3>
            <Grid container spacing={2} >
                {
                    manageorders.map(manageorder => <ManageAllOrder key={manageorder._id} manageorder={manageorder} manageorders={manageorders} setmanageorders={setmanageorders}></ManageAllOrder>)
                }
            </Grid>
        </div>
    );
};

export default ManageAllOrders;