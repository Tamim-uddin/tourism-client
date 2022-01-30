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
    console.log(tours.name);
    

    useEffect( () => {
        fetch(`https://limitless-chamber-81508.herokuapp.com/tours/${_id}`)
        .then(res => res.json())
        .then(data => settours(data))
    } , [_id]);



    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {bookingInfo};
        newInfo[field] = value;
        setbookingInfo(newInfo);
    }

    const handleonSubmit = e => {
        e.preventDefault();
        const booking = {
            ...bookingInfo,
            tourName: tours.name,
            price: tours.price,
            
        }

        fetch('https://limitless-chamber-81508.herokuapp.com/bookings', {
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
                <Grid item xs={8} sm={10} md={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                               <img style={{width: '90%', }} src={tours.img} alt="" />
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ ml: '65px', textAlign: 'left', background: 'white', position: 'absolute', bottom: '93px', left: '16px', p: '5px', borderTopRightRadius: '5px', fontFamily: 'Lucida Handwriting'}}>
                                {tours.name}
                            </Typography>
                            <Typography sx={{  ml: '65px', textAlign: 'left'}} >
                             ${tours.price}
                            </Typography>
                            <Typography variant="body2" sx={{ ml: '65px', textAlign: 'left', width: '50%', fontFamily: 'Verdana'}}>
                                {tours.des}
                            </Typography>
                        </CardContent>
                       
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={12} sx={{ position: 'absolute', width: '30%', bottom: '-120px', right: '120px', background: 'white', borderRadius: '5px'}}>
              
                    <form onSubmit={handleonSubmit}>
                        <TextField 
                        sx={{width: '90%', mb: 2 }}
                        id="standard-basic" 
                        label="Name" 
                        name="Username"
                        onBlur={handleonBlur}
                        defaultValue={user.displayName}
                        variant="standard" /> <br />
                        <TextField 
                        sx={{width: '90%', mb: 2}}
                        id="standard-basic" 
                        label="Email" 
                        type="email"
                        name="email"
                        onBlur={handleonBlur}
                        defaultValue={user.email}
                        variant="standard" /> <br />
                        <TextField
                        sx={{width: '90%', mb: 2}} 
                                           
                        label="Tour Name"
                        name="tourName"
                        defaultValue={tours.name}
                        variant="standard" /> <br />
                        <TextField
                        disabled
                        sx={{width: '90%', mb: 2}}                        
                        label="Price"
                        defaultValue={tours?.price}
                        variant="standard" /> <br />
                        <Button type="submit" variant="contained">Place Order</Button>
                    </form>
                </Grid>
                
            </Grid> 
        </div>
    );
};

export default Booking;