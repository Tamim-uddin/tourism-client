import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyOrder = ({order, setOrders, Orders}) => {
    const {_id, email, Username, tourName, price} = order;

    const handleDelete = id => {
        fetch(`https://limitless-chamber-81508.herokuapp.com/bookings/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            alert('Deleted Successfully')
            const remainingorder = Orders.filter(order => order._id !== id)
            setOrders(remainingorder);
        }   
    })
    } 

    return (
        <div>   
            <Grid item xs={12} md={12} >
                <Card sx={{ minWidth: 370, m: 4, }}>
                    <CardContent>                          
                            <Typography variant="h5" component="div">
                                {tourName}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              ${price}
                            </Typography>
                            <Typography variant="body2">
                                {Username}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {email}
                            </Typography>
                    </CardContent>
                        <Button onClick={() => handleDelete(_id)} variant="contained" sx={{backgroundColor: '#804d4d', mb: '3px'}}>Delete</Button>
                </Card>
            </Grid>  
        </div>
    );
};

export default MyOrder;