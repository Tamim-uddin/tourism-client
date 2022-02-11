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
                <Grid item xs={8} sm={10} md={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                               <img style={{width: '90%', }} src={tours.img} alt="" />
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ ml: '65px', textAlign: 'left', background: 'white', position: 'absolute', bottom: '190px', left: '16px', p: '5px', borderTopRightRadius: '5px', fontFamily: 'Lucida Handwriting'}}>
                                {tours.name}
                            </Typography>
                            <Container>
                            <Grid container spacing={1} sx={{ml: '60px', backgroundColor: 'rgba(0,0,0,.2)', borderRadius: '5px', width: '40%', p: '10px', mt: '30px', mb: '10px'}}>
                                <Grid item xs={3} md={3}>
                                 <AccessTimeRoundedIcon />
                                </Grid>
                                <Grid item xs={3} md={3}>
                                    <PersonOutlineRoundedIcon />
                                </Grid>
                                <Grid item xs={3} md={3}>
                                   <FmdGoodOutlinedIcon />
                                </Grid>
                                <Grid item xs={3} md={3}>
                                    <MonetizationOnOutlinedIcon />
                                </Grid>
                                <Grid item xs={9} md={3}>                                
                                    {tours.daytime} Days
                                </Grid>
                                <Grid item xs={9} md={3}>
                                    {tours.age} Age+
                                </Grid>
                                <Grid item xs={9} md={3}>
                                    {tours.loc}
                                </Grid>
                                <Grid item xs={9} md={3}>
                                    ${tours.price}
                                </Grid>
                            </Grid>
                            </Container>
                            <Typography variant="body2" sx={{ ml: '65px', textAlign: 'left', width: '50%', fontFamily: 'Verdana'}}>
                                {tours.des}
                            </Typography>
                        </CardContent>
                       
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={12} sx={{ position: 'absolute', width: '30%', bottom: '10px', right: '120px', background: 'white', borderRadius: '5px'}}>              
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
                    {bookingSuccessfull && <Alert sx={{mt: '10px'}} severity="success">Tour booked successfully</Alert>}
                </Grid>              
            </Grid> 
        </div>
    );
};

export default Booking;