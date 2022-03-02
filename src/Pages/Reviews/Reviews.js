import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setreviews(data))
    } , [])
    return (
        <Box sx={{mt: '160px'}}>
            <Typography variant="h3" gutterBottom component="div" sx={{mt: '110px', mb: '40px' ,textAlign: 'center', ml: '30px', fontFamily:'"Playfair Display",serif', color: '#303030', fontWeight: '700'}}>
                    Users Satisfaction
            </Typography>
            <Grid container spacing={1}>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Grid>
        </Box>
    );
};

export default Reviews;