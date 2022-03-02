import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Review.css';


const Review = ({review}) => {
    const {img, name, email, des} = review;
    <meta name='viewport' content='width=device-width,initial-scale=1.0' />
    return (
        <Grid item xs={12} sm={6} md={4} >
       <Container>
            <Card sx={{ minWidth: 275, boxShadow: 3 }}>
            <CardContent>
                <img className='img-fluid'  style={{width: '80px', height: '80px', border: '.1px solid #804d4d' ,borderRadius: '50px'}} src={img} alt= ''/>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography sx={{my: 1.5}} variant="body2">
                  {email}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   {des}
                </Typography>   
            </CardContent>                   
            </Card>
            </Container>
</Grid>
    );
};

export default Review;