import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Booking.css';
import { Alert, CircularProgress, Container, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import UseAuth from '../Hooks/UseAuth';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Booking = () => {
    const { _id } = useParams(); 
    const [tours, settours] = useState({});
    const {user, isloading} = UseAuth();
    const [bookingSuccessfull, setbookingSuccessfull] = useState(false);
    const initialInfo = {Username: user.displayName, email: user.email}
    const [bookingInfo, setbookingInfo] = useState(initialInfo);
    
    
    useEffect( () => {
        fetch(`https://limitless-chamber-81508.herokuapp.com/tours/${_id}`)
        .then(res => res.json())
        .then(data => settours(data))
    } , [_id]);

    if(isloading){
        return <CircularProgress />
    }
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
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                setbookingSuccessfull(true);
            }
        })
    }


    return (
        <div className="booking"> 
           <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} sx={{ minWidth: 275 }}> 
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                               <img style={{width: '90%', padding:'20px' }} src={tours.img} alt="" />
                        </Typography>
                        <Typography variant="h5" component="div" sx={{ ml: '80px', textAlign: 'left',   background: 'white',  p: '5px', borderTopRightRadius: '5px', fontFamily: 'Lucida Handwriting'}}>
                                {tours.name}
                        </Typography>    
                </Grid>
            </Grid>
                            <Container>
                            <Grid container spacing={2}>
                                {/* <Grid item xs={12} sm={6} md={6}>
                                 <AccessTimeRoundedIcon />
                                </Grid>
                                <Grid item xs={3} sm={3} md={3}>
                                    <PersonOutlineRoundedIcon />
                                </Grid>
                                <Grid item xs={3} sm={3} md={3}>
                                   <FmdGoodOutlinedIcon />
                                </Grid>
                                <Grid item xs={3} sm={3} md={3}>
                                    <MonetizationOnOutlinedIcon />
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>                             
                                    {tours.daytime} Days
                                </Grid>
                                <Grid item xs={3} sm={2} md={3}>
                                    {tours.age} Age+
                                </Grid>
                                <Grid item xs={3} sm={4} md={3}>
                                    {tours.loc}
                                </Grid>
                                <Grid item xs={3} sm={4} md={3}>
                                    ${tours.price}
                                </Grid>
                                */}
                                <Grid item xs={12} sm={6} md={6}>   
                                    <Typography variant="body2" sx={{ ml: '65px', textAlign: 'left', width: '80%', fontFamily: 'Verdana'}}>
                                    {tours.des}
                                    </Typography>  
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                {bookingSuccessfull && <Alert sx={{mt: '10px'}} severity="success" >Order placed successfully</Alert>}
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
                                        disabled                                          
                                        // label="Tour Name"
                                        name="tourName"
                                        value={tours.name}
                                        variant="standard" /> <br />
                                        <TextField
                                        disabled
                                        sx={{width: '90%', mb: 2}}                        
                                        // label="Price"
                                        name="price"
                                        value={tours.price}
                                        variant="standard" /> <br />
                                        <Button sx={{backgroundColor: 'rgba(0,0,0,.5)'}} type="submit" variant="contained">Place Order</Button>
                                    </form>
                                   
                                </Grid>
                               
                            </Grid>
                                
                            </Container>
                             
                   
        </div>
    );
};

export default Booking;


//  sx={{ml: '20px', backgroundColor: 'rgba(0,0,0,.2)', borderRadius: '5px', width: '60%', p: '10px', mt: '30px', mb: '10px', textAlign: 'left'}}

// sx={{ width: '30%', bottom: '10px', right: '120px', background: 'white', borderRadius: '5px'}}