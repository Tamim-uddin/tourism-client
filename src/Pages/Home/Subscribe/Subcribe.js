import { Grid, Typography } from '@mui/material';
import React from 'react';
import './Subcribe.css';

const Subcribe = () => {
    return (
        <div className='choose-tour'>
            
                <Typography variant="h2" gutterBottom component="div" sx={{color: 'white', fontFamily: '"Playfair Display",serif',  fontWeight: 700}}>
                    Choose Tours
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{color: 'white', fontFamily: 'Cabin,sans-serif', fontWeight: 400, mt: '30px'}}>    
                Find your next travel adventure and make it memorable. Explore wildlife, enjoy <br />seaside or book a cruise tour. Check out our popular destinations.
                </Typography>
                <Grid container spacing={2} sx={{mt: '30px'}}>
                    <Grid item xs={6} md={2.5} sx={{color: 'white'}}>
                        <img style={{height: '81px', width: '81px'}}  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-1.png' alt='' />
                    </Grid>
                    <Grid item xs={6} md={2.5} sx={{color: 'white'}}>
                    <img style={{height: '81px', width: '81px'}}  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-2.png' alt='' />
                    </Grid>
                    <Grid item xs={6} md={2} sx={{color: 'white'}}>
                    <img style={{height: '81px', width: '81px'}}  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-3.png' alt='' />
                    </Grid>
                    <Grid item xs={6} md={2.5} sx={{color: 'white'}}>
                    <img style={{height: '81px', width: '81px'}}  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-4.png' alt='' />
                    </Grid>
                    <Grid item xs={6} md={2.5} sx={{color: 'white'}}>
                    <img style={{height: '81px', width: '81px'}}  src='	https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-custom-icon-5.png' alt='' />
                    </Grid>
                    <Grid item xs={6} md={2.5} sx={{color: 'white', fontFamily: '"Playfair Display",serif', fontWeight: 700}}>
                        Self-Guided
                    </Grid>
                    <Grid item xs={6} md={2.5} sx={{color: 'white', fontFamily: '"Playfair Display",serif', fontWeight: 700}}>
                        Cruises
                    </Grid>
                    <Grid item xs={6} md={2} sx={{color: 'white', fontFamily: '"Playfair Display",serif', fontWeight: 700}}>
                        Adventure
                    </Grid>
                    <Grid item xs={6} md={2.5} sx={{color: 'white', fontFamily: '"Playfair Display",serif', fontWeight: 700}}>
                        wildlife
                    </Grid>
                    <Grid item xs={6} md={2.5} sx={{color: 'white', fontFamily: '"Playfair Display",serif', fontWeight: 700}}>
                        seaside
                    </Grid>
                </Grid>
        </div>
    );
};

export default Subcribe;